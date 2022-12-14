package com.alfabetoapi.model;

import com.alfabetoapi.enums.ExerciseDifficultyEnum;
import com.alfabetoapi.enums.ExerciseTypeEnum;
import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ExerciseTypeEnum type;

    @Enumerated(EnumType.STRING)
    private ExerciseDifficultyEnum difficulty;

    private BigInteger rewardCoins;
}
