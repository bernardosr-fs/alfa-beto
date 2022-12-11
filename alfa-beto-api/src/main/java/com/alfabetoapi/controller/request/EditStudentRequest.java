package com.alfabetoapi.controller.request;

import lombok.Data;

@Data
public class EditStudentRequest {
    private String password;
    private String confirmPassword;
    private String firstName;
    private String lastName;
}
