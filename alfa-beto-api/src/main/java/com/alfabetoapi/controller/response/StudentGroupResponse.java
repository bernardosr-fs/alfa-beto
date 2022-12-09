package com.alfabetoapi.controller.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StudentGroupResponse {
    private Long id;
    private String name;
    private String description;
    private String responsibleFirstName;
    private String responsibleLastName;
}
