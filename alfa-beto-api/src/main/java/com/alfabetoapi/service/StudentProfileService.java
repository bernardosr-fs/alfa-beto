package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.EditStudentRequest;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.service.LoginService;
import com.alfabetoapi.validator.UserValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class StudentProfileService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserValidator userValidator;


    public StudentDetailedResponse getProfile() {
        var student = loginService.getLoggedStudent();

        return StudentMapper.toDetailedResponse(student);
    }

    public void editProfile(Long studentId, EditStudentRequest request) {
        var student = findByIdService.findStudent(studentId);

        var responsible = loginService.getLoggedResponsible();

        if (!bondRepository.existsByResponsible_idAndStudent_idAndFirstBond(responsible.getId(), student.getId(), true))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Você não tem permissão para editar as informações desse estudante.");

        userValidator.editStudentValidation(request);

        student.setPassword(passwordEncoder.encode(request.getPassword()));
        student.setFirstName(request.getFirstName());
        student.setLastName(request.getLastName());

        studentRepository.save(student);
    }
}
