package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.BondInviteResponse;
import com.alfabetoapi.model.BondInvite;
import lombok.experimental.UtilityClass;

@UtilityClass
public class BondInviteMapper {

    public BondInviteResponse toResponse(BondInvite bondInvite) {
        return BondInviteResponse.builder()
                .id(bondInvite.getId())
                .responsibleFirstName(bondInvite.getResponsible().getFirstName())
                .responsibleLastName(bondInvite.getResponsible().getLastName())
                .build();
    }
}
