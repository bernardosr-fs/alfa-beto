package com.alfabetoapi.controller.request;

import lombok.Data;

@Data
public class StudentRegisterRequest {
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
}