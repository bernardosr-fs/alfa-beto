package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.BondedResponsibleResponse;
import com.alfabetoapi.model.Bond;
import lombok.experimental.UtilityClass;

@UtilityClass
public class BondMapper {

    public BondedResponsibleResponse toResponsibleResponse(Bond bond) {
        return BondedResponsibleResponse.builder()
                .bondId(bond.getId())
                .responsibleFirstName(bond.getResponsible().getFirstName())
                .responsibleLastName(bond.getResponsible().getLastName())
                .responsiblePhoneNumber(bond.getResponsible().getPhoneNumber())
                .build();
    }
}
