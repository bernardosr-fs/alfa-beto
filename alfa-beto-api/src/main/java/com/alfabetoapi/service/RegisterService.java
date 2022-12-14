package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.mapper.ResponsibleMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.model.Bond;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.model.Role;
import com.alfabetoapi.security.service.LoginService;
import com.alfabetoapi.validator.UserValidator;
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

    private final UserValidator userValidator;

    public void responsibleRegister(ResponsibleRegisterRequest request) {

        userValidator.registerResponsibleValidation(request);

        var responsible = ResponsibleMapper.toEntity(request);
        responsible.setPassword(passwordEncoder.encode(request.getPassword()));

        var role = Role.builder()
                .name(RESPONSIBLE_ROLE)
                .build();

        responsible.setRoles(new HashSet<>(List.of(role)));

        responsibleRepository.save(responsible);
    }

    public void studentRegister(StudentRegisterRequest request) {

        userValidator.registerStudentValidation(request);

        var responsible = loginService.getLoggedResponsible();

        var student = StudentMapper.toEntity(request);
        student.setPassword(passwordEncoder.encode(request.getPassword()));

        var role = Role.builder()
                .name(STUDENT_ROLE)
                .build();

        student.setRoles(new HashSet<>(List.of(role)));

        studentRepository.save(student);

        var bond = Bond.builder()
                .firstBond(true)
                .student(student)
                .responsible(responsible)
                .build();

        bondRepository.save(bond);
    }
}
