package com.alfabetoapi.controller.response;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class ResponsibleResponse {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
}
