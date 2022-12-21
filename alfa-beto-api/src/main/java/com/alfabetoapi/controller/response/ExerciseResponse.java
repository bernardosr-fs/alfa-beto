package com.alfabetoapi.controller.response;

import com.alfabetoapi.enums.ExerciseDifficultyEnum;
import com.alfabetoapi.enums.ExerciseTypeEnum;
import lombok.Builder;
import lombok.Data;

import java.math.BigInteger;

@Data
@Builder
public class ExerciseResponse {
    private Long id;
    private String name;
    private ExerciseTypeEnum type;
    private ExerciseDifficultyEnum difficulty;
    private BigInteger rewardCoins;
}
