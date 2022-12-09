package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.BondInviteResponse;
import com.alfabetoapi.enums.BondInviteStatusEnum;
import com.alfabetoapi.mapper.BondInviteMapper;
import com.alfabetoapi.model.Bond;
import com.alfabetoapi.model.BondInvite;
import com.alfabetoapi.repository.BondInviteRepository;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BondInviteService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final BondRepository bondRepository;
    private final BondInviteRepository bondInviteRepository;

    public List<BondInviteResponse> getAllPendingInvites() {
        var student = loginService.getLoggedStudent();

        var bondInvites = bondInviteRepository.findAllByStudent_idAndStatusOrderByDateDesc(student.getId(), BondInviteStatusEnum.PENDING);

        return bondInvites.stream().map(BondInviteMapper::toResponse).collect(Collectors.toList());
    }

    public void sendInvite(Long studentId) {
        var student = findByIdService.findStudent(studentId);

        var responsible = loginService.getLoggedResponsible();

        if (bondRepository.existsByResponsible_idAndStudent_id(responsible.getId(), student.getId()))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe um vínculo entre você e esse estudante.");

        if (bondInviteRepository.existsByResponsible_idAndStudent_idAndStatus(responsible.getId(), student.getId(), BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe um convite de vínculo pendente seu para esse estudante.");

        var bondInvite = BondInvite.builder()
                .student(student)
                .responsible(responsible)
                .build();

        bondInviteRepository.save(bondInvite);
    }

    public void acceptInvite(Long inviteId) {
        var bondInvite = findByIdService.findBondInvite(inviteId);

        var student = loginService.getLoggedStudent();

        if (!bondInvite.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse convite de vínculo não é seu.");

        if (!bondInvite.getStatus().equals(BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Esse convite de vínculo não está pendente.");

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
        var bondInvite = findByIdService.findBondInvite(inviteId);

        var student = loginService.getLoggedStudent();

        if (!bondInvite.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse convite de vínculo não é seu.");

        if (!bondInvite.getStatus().equals(BondInviteStatusEnum.PENDING))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Esse convite de vínculo não está pendente.");

        bondInvite.setStatus(BondInviteStatusEnum.RECUSED);

        bondInviteRepository.save(bondInvite);
    }
}
