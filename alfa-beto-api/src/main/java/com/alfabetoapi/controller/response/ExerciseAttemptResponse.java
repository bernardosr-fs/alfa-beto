package com.alfabetoapi.controller.response;

import com.alfabetoapi.model.enums.ExerciseDifficultyEnum;
import com.alfabetoapi.model.enums.ExerciseTypeEnum;
import lombok.Builder;
import lombok.Data;

import java.math.BigInteger;

@Data
@Builder
public class ExerciseAttemptResponse {
    private Long exerciseId;
    private String exerciseName;
    private ExerciseTypeEnum type;
    private ExerciseDifficultyEnum difficulty;
    private BigInteger rewardCoins;
    private Long errorsPermitted;
    private Long exerciseAttemptId;
}
