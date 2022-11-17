package com.alfabetoapi.security.service;

import com.alfabetoapi.controller.response.ResponsibleResponse;
import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.mapper.ResponsibleMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.model.Responsible;
import com.alfabetoapi.model.Student;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.config.UserSecurity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;

    public ResponsibleResponse responsibleLogin() {
        return ResponsibleMapper.toResponse(getLoggedResponsible());
    }

    public StudentResponse studentLogin() {
        return StudentMapper.toResponse(getLoggedStudent());
    }

    public Long getLoggedUserId() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        var security = (UserSecurity) authentication.getPrincipal();
        return security.getId();
    }

    public Responsible getLoggedResponsible() {
        return responsibleRepository.findById(getLoggedUserId()).orElse(null);
    }

    public Student getLoggedStudent() {
        return studentRepository.findById(getLoggedUserId()).orElse(null);
    }
}
