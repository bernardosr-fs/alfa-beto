package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.response.ResponsibleResponse;
import com.alfabetoapi.model.Responsible;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ResponsibleMapper {

    public Responsible toEntity(ResponsibleRegisterRequest request) {
        return Responsible.builder()
                .email(request.getEmail())
                .build();
    }

    public ResponsibleResponse toResponse(Responsible responsible) {
        return ResponsibleResponse.builder()
                .id(responsible.getId())
                .email(responsible.getEmail())
                .build();
    }
}
