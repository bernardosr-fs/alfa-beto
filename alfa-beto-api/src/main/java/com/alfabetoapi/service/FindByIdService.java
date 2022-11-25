package com.alfabetoapi.service;

import com.alfabetoapi.model.BondInvite;
import com.alfabetoapi.model.Student;
import com.alfabetoapi.repository.BondInviteRepository;
import com.alfabetoapi.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class FindByIdService {

    private final StudentRepository studentRepository;
    private final BondInviteRepository bondInviteRepository;

    public Student findStudent(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um estudante com esse id"));
    }

    public BondInvite findBondInvite(Long id) {
        return bondInviteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um convite de vínculo com esse id"));
    }
}
