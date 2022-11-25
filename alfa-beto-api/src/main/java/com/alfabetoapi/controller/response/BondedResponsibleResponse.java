package com.alfabetoapi.controller.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BondedResponsibleResponse {
    private Long bondId;
    private String responsibleFirstName;
    private String responsibleLastName;
    private String responsiblePhoneNumber;
}
