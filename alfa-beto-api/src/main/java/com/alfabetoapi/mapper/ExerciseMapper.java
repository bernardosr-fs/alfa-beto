package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.ExerciseResponse;
import com.alfabetoapi.model.Exercise;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ExerciseMapper {

    public ExerciseResponse toResponse(Exercise exercise) {
        return ExerciseResponse.builder()
                .id(exercise.getId())
                .name(exercise.getName())
                .type(exercise.getType())
                .difficulty(exercise.getDifficulty())
                .rewardCoins(exercise.getRewardCoins())
                .build();
    }
}
