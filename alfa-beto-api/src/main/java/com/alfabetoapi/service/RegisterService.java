package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.mapper.ResponsibleMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.model.Bond;
import com.alfabetoapi.model.Responsible;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.model.Role;
import com.alfabetoapi.security.service.LoginService;
import com.alfabetoapi.validator.RegisterValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegisterService {

    public static String RESPONSIBLE_ROLE = "RESPONSIBLE";
    public static String STUDENT_ROLE = "STUDENT";

    private final LoginService loginService;
    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;
    private final PasswordEncoder passwordEncoder;
    private final RegisterValidator registerValidator;

    public void responsibleRegister(ResponsibleRegisterRequest request) {

        registerValidator.responsibleValidation(request);

        var responsible = ResponsibleMapper.toEntity(request);
        responsible.setPassword(passwordEncoder.encode(request.getPassword()));

        var role = new Role();
        role.setName(RESPONSIBLE_ROLE);

        responsible.setRoles(new HashSet<>(List.of(role)));

        responsibleRepository.save(responsible);
    }

    public void studentRegister(StudentRegisterRequest request) {

        registerValidator.studentValidation(request);

        Responsible responsible = loginService.getLoggedResponsible();

        var student = StudentMapper.toEntity(request);
        student.setPassword(passwordEncoder.encode(request.getPassword()));

        var role = new Role();
        role.setName(STUDENT_ROLE);

        student.setRoles(new HashSet<>(List.of(role)));

        studentRepository.save(student);

        var bond = new Bond();
        bond.setStudent(student);
        bond.setResponsible(responsible);

        bondRepository.save(bond);
    }
}