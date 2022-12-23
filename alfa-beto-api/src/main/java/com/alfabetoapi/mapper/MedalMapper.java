package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.MedalResponse;
import com.alfabetoapi.model.OwnedMedal;
import lombok.experimental.UtilityClass;

@UtilityClass
public class MedalMapper {

    public MedalResponse toResponse(OwnedMedal ownedMedal) {
        return MedalResponse.builder()
                .id(ownedMedal.getMedal().getId())
                .name(ownedMedal.getMedal().getName())
                .type(ownedMedal.getMedal().getType())
                .achievingCondition(ownedMedal.getMedal().getAchievingCondition())
                .image(ownedMedal.getMedal().getImage())
                .build();
    }
}
