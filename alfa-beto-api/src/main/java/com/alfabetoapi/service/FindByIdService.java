package com.alfabetoapi.service;

import com.alfabetoapi.model.*;
import com.alfabetoapi.repository.*;
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
    private final StudentGroupRepository studentGroupRepository;
    private final CustomizationRepository customizationRepository;

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

    public StudentGroup findGroup(Long id) {
        return studentGroupRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um grupo com esse id"));
    }

    public Customization findCustomization(Long id) {
        return customizationRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe uma personalização com esse id"));
    }
}
