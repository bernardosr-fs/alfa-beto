package com.alfabetoapi.service;

import com.alfabetoapi.model.Bond;
import com.alfabetoapi.model.BondInvite;
import com.alfabetoapi.model.Student;
import com.alfabetoapi.repository.BondInviteRepository;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class FindByIdService {

    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;
    private final BondInviteRepository bondInviteRepository;

    public Student findStudent(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um estudante com esse id"));
    }

    public Bond findBond(Long id) {
        return bondRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um vínculo com esse id"));
    }

    public BondInvite findBondInvite(Long id) {
        return bondInviteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um convite de vínculo com esse id"));
    }
}
