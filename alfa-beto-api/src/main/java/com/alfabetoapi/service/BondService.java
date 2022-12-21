package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.BondedResponsibleResponse;
import com.alfabetoapi.controller.response.ResponsibleDetailedResponse;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.mapper.BondMapper;
import com.alfabetoapi.mapper.ResponsibleMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.repository.*;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BondService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;
    private final GroupEntryRepository groupEntryRepository;
    private final OwnedCustomizationRepository ownedCustomizationRepository;

    public List<StudentDetailedResponse> getAllBondedStudents() {
        var responsible = loginService.getLoggedResponsible();

        var students = studentRepository.findAllBondedStudents(responsible.getId());
        var firstBondedStudentsIds = bondRepository.findAllFirstBondedStudentsIds(responsible.getId());

        return students.stream().map(s -> {
            if (firstBondedStudentsIds.contains(s.getId()))
                return StudentMapper.toDetailedResponse(s, true, ownedCustomizationRepository.findAllByStudent_idAndEquipped(s.getId(),true));
            return StudentMapper.toDetailedResponse(s, false, ownedCustomizationRepository.findAllByStudent_idAndEquipped(s.getId(),true));
        }).collect(Collectors.toList());
    }

    public List<ResponsibleDetailedResponse> getAllBondedResponsibles() {
        var student = loginService.getLoggedStudent();

        var responsibles = responsibleRepository.findAllBondedResponsibles(student.getId());

        return responsibles.stream().map(ResponsibleMapper::toDetailedResponse).collect(Collectors.toList());
    }

    public List<BondedResponsibleResponse> getAllBondsFromBondedStudent(Long studentId) {
        var student = findByIdService.findStudent(studentId);

        var responsible = loginService.getLoggedResponsible();

        if (!bondRepository.existsByResponsible_idAndStudent_id(responsible.getId(), student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um vínculo entre você e esse estudante.");

        var bonds = bondRepository.findAllByStudent_id(student.getId());

        return bonds.stream().map(BondMapper::toResponsibleResponse).collect(Collectors.toList());
    }

    public void deleteBondFromBondedStudent(Long bondId) {
        var bond = findByIdService.findBond(bondId);

        var responsible = loginService.getLoggedResponsible();

        if (!bondRepository.existsByResponsible_idAndStudent_idAndFirstBond(responsible.getId(), bond.getStudent().getId(), true))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Você não tem permissão para remover um vínculo desse estudante.");

        if (bond.getResponsible().getId().equals(responsible.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Você não pode remover o seu próprio vínculo.");

        bondRepository.delete(bond);
        groupEntryRepository.deleteAllByStudent_idAndGroup_responsible_id(bond.getStudent().getId(), bond.getResponsible().getId());
    }
}
