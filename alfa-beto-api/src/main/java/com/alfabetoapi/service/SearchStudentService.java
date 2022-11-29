package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;

@Service
@RequiredArgsConstructor
public class SearchStudentService {

    private final LoginService loginService;

    private final StudentRepository studentRepository;

    public StudentResponse searchStudent(String userName) {
        var student = studentRepository.findByUserName(userName);

        if (isNull(student))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um estudante com esse nome de usuário.");

        return StudentMapper.toResponse(student);
    }
}
