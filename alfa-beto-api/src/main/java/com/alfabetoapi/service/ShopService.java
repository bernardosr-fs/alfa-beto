package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.CustomizationResponse;
import com.alfabetoapi.enums.CustomizationTypeEnum;
import com.alfabetoapi.mapper.CustomizationMapper;
import com.alfabetoapi.model.OwnedCustomization;
import com.alfabetoapi.repository.CustomizationRepository;
import com.alfabetoapi.repository.OwnedCustomizationRepository;
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
public class ShopService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final CustomizationRepository customizationRepository;
    private final OwnedCustomizationRepository ownedCustomizationRepository;
    private final StudentRepository studentRepository;

    public List<CustomizationResponse> getShop(CustomizationTypeEnum type) {
        var student = loginService.getLoggedStudent();

        var customizations =
                customizationRepository.findAllNotOwnedCustomizationsOfType(student.getId(), type);

        return customizations.stream().map(CustomizationMapper::toResponse).collect(Collectors.toList());
    }

    public void buyCustomization(Long customizationId) {
        var customization = findByIdService.findCustomization(customizationId);

        var student = loginService.getLoggedStudent();

        if (ownedCustomizationRepository.existsByStudent_idAndCustomization_id(student.getId(), customization.getId()))
            throw new ResponseStatusException(HttpStatus.FOUND, "Você já possui essa personalização.");

        if (student.getCoins().compareTo(customization.getPrice()) < 0)
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Você não possui moedas suficientes para comprar essa personalização.");

        student.setCoins(student.getCoins().subtract(customization.getPrice()));

        studentRepository.save(student);

        var ownedCustomization = OwnedCustomization.builder()
                .student(student)
                .customization(customization)
                .build();

        ownedCustomizationRepository.save(ownedCustomization);
    }
}
