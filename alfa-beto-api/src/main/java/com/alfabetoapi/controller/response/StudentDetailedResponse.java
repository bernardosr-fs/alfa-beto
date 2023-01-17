package com.alfabetoapi.controller.response;

import lombok.Builder;
import lombok.Data;

import java.math.BigInteger;
import java.util.List;

@Data
@Builder
public class StudentDetailedResponse {
    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private BigInteger coins;
    private Long easyExercisesDone;
    private Long mediumExercisesDone;
    private Long hardExercisesDone;
    private boolean firstBond;
    private List<OwnedCustomizationResponse> equippedCustomizations;
    private List<MedalResponse> achievedMedals;
}
