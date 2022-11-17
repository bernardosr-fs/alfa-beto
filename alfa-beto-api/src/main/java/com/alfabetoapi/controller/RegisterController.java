package com.alfabetoapi.controller;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.service.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/register")
public class RegisterController {

    private final RegisterService registerService;

    @PostMapping("/responsible")
    public void responsibleRegister(@RequestBody ResponsibleRegisterRequest request) {
        registerService.responsibleRegister(request);
    }

    @PostMapping("/student")
    public void studentRegister(@RequestBody StudentRegisterRequest request) {
        registerService.studentRegister(request);
    }
}
