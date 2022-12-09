package com.alfabetoapi.controller.request;

import lombok.Data;

@Data
public class AddStudentRequest {
    private Long studentId;
    private Long groupId;
}
