package com.alfabetoapi.security.controller;

import com.alfabetoapi.controller.response.ResponsibleResponse;
import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {

    private final LoginService loginService;

    @PostMapping("responsible")
    public ResponsibleResponse responsibleLogin() {
        return loginService.responsibleLogin();
    }

    @PostMapping("student")
    public StudentResponse studentLogin() {
        return loginService.studentLogin();
    }
}
