package com.alfabetoapi.controller.request;

import lombok.Data;

@Data
public class ResponsibleRegisterRequest {
    private String email;
    private String password;
    private String confirmPassword;
    private String firstName;
    private String lastName;
    private String cpf;
    private String phoneNumber;
}
