package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.EditResponsibleRequest;
import com.alfabetoapi.controller.response.ResponsibleDetailedResponse;
import com.alfabetoapi.mapper.ResponsibleMapper;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.security.service.LoginService;
import com.alfabetoapi.validator.UserValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ResponsibleProfileService {

    private final LoginService loginService;

    private final ResponsibleRepository responsibleRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserValidator userValidator;

    public ResponsibleDetailedResponse getProfile() {
        var responsible = loginService.getLoggedResponsible();

        return ResponsibleMapper.toDetailedResponse(responsible);
    }

    public void editProfile(EditResponsibleRequest request) {
        var responsible = loginService.getLoggedResponsible();

        userValidator.editResponsibleValidation(request);

        responsible.setPassword(passwordEncoder.encode(request.getPassword()));
        responsible.setFirstName(request.getFirstName());
        responsible.setLastName(request.getLastName());
        responsible.setCpf(request.getCpf());
        responsible.setPhoneNumber(request.getPhoneNumber());

        responsibleRepository.save(responsible);
    }
}
