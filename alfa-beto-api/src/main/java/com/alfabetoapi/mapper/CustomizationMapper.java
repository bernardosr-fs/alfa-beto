package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.CustomizationResponse;
import com.alfabetoapi.model.Customization;
import lombok.experimental.UtilityClass;

@UtilityClass
public class CustomizationMapper {

    public CustomizationResponse toResponse(Customization customization) {
        return CustomizationResponse.builder()
                .id(customization.getId())
                .name(customization.getName())
                .type(customization.getType())
                .price(customization.getPrice())
                .value(customization.getCustomValue())
                .build();
    }
}
