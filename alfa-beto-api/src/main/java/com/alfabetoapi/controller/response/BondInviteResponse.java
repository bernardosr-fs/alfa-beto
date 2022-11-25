package com.alfabetoapi.controller.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BondInviteResponse {
    private Long id;
    private String responsibleFirstName;
    private String responsibleLastName;
}
