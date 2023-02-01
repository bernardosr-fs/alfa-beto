package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.OwnedCustomizationResponse;
import com.alfabetoapi.model.OwnedCustomization;
import lombok.experimental.UtilityClass;

@UtilityClass
public class OwnedCustomizationMapper {

    public OwnedCustomizationResponse toResponse(OwnedCustomization ownedCustomization) {
        return OwnedCustomizationResponse.builder()
                .id(ownedCustomization.getCustomization().getId())
                .name(ownedCustomization.getCustomization().getName())
                .type(ownedCustomization.getCustomization().getType())
                .value(ownedCustomization.getCustomization().getCustomValue())
                .equipped(ownedCustomization.isEquipped())
                .ownedCustomizationId(ownedCustomization.getId())
                .build();
    }
}
