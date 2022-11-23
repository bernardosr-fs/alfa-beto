package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.BondInviteResponse;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.enums.BondInviteStatusEnum;
import com.alfabetoapi.mapper.BondInviteMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.model.Bond;
import com.alfabetoapi.model.BondInvite;
import com.alfabetoapi.model.Responsible;
import com.alfabetoapi.model.Student;
import com.alfabetoapi.repository.BondInviteRepository;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.StudentRepository;
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

    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;
    private final BondInviteRepository bondInviteRepository;

    public void sendInvite(Long studentId) {
        Student student = findByIdService.findStudent(studentId);

        Responsible responsible = loginService.getLoggedResponsible();

        if (bondRepository.existsByResponsible_idAndStudent_id(responsible.getId(), studentId))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe um vínculo entre você e esse estudante.");

        if (bondInviteRepository.existsByResponsible_idAndStudent_idAndStatus(responsible.getId(), studentId, BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe um convite de vínculo pendente seu para esse estudante.");

        var bondInvite = BondInvite.builder()
                .student(student)
                .responsible(responsible)
                .build();

        bondInviteRepository.save(bondInvite);
    }

    public void acceptInvite(Long inviteId) {
        BondInvite bondInvite = findByIdService.findBondInvite(inviteId);

        Student student = loginService.getLoggedStudent();

        if (!bondInvite.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse convite de vínculo não é seu.");

        if (!bondInvite.getStatus().equals(BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Esse convite de vínculo não está pendente.");

        bondInvite.setStatus(BondInviteStatusEnum.ACCEPTED);

        bondInviteRepository.save(bondInvite);

        var bond = Bond.builder()
                .firstBond(false)
                .student(student)
                .responsible(bondInvite.getResponsible())
                .build();

        bondRepository.save(bond);
    }

    public void recuseInvite(Long inviteId) {
        BondInvite bondInvite = findByIdService.findBondInvite(inviteId);

        Student student = loginService.getLoggedStudent();

        if (!bondInvite.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse convite de vínculo não é seu.");

        if (!bondInvite.getStatus().equals(BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Esse convite de vínculo não está pendente.");

        bondInvite.setStatus(BondInviteStatusEnum.RECUSED);

        bondInviteRepository.save(bondInvite);
    }

    public List<BondInviteResponse> getAllPendingInvites() {
        Student student = loginService.getLoggedStudent();

        List<BondInvite> bondInvites = bondInviteRepository.findAllByStudent_idAndStatusOrderByDateDesc(student.getId(), BondInviteStatusEnum.PENDING);

        return bondInvites.stream().map(BondInviteMapper::toResponse).collect(Collectors.toList());
    }

    public List<StudentDetailedResponse> getAllBondedStudents() {
        Responsible responsible = loginService.getLoggedResponsible();

        List<Student> students = studentRepository.findAllBondedStudents(responsible.getId());

        return students.stream().map(StudentMapper::toDetailedResponse).collect(Collectors.toList());
    }
}
