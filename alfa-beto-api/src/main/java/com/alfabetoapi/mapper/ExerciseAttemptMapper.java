package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.response.ExerciseAttemptResponse;
import com.alfabetoapi.model.Exercise;
import com.alfabetoapi.model.ExerciseAttempt;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ExerciseAttemptMapper {

    public ExerciseAttemptResponse toResponse(Exercise exercise, ExerciseAttempt exerciseAttempt) {
        return ExerciseAttemptResponse.builder()
                .exerciseId(exercise.getId())
                .exerciseName(exercise.getName())
                .type(exercise.getType())
                .difficulty(exercise.getDifficulty())
                .rewardCoins(exercise.getRewardCoins())
                .errorsPermitted(exercise.getErrorsPermitted())
                .exerciseAttemptId(exerciseAttempt.getId())
                .build();
    }
}
