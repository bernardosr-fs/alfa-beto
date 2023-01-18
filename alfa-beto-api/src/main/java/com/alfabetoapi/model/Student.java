package com.alfabetoapi.model;

import com.alfabetoapi.enums.ExerciseDifficultyEnum;
import com.alfabetoapi.security.model.Role;
import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String password;
    private String firstName;
    private String lastName;

    @Builder.Default
    private BigInteger coins = BigInteger.valueOf(0);

    @Builder.Default
    private Long easyExercisesDone = 0L;

    @Builder.Default
    private Long mediumExercisesDone = 0L;

    @Builder.Default
    private Long hardExercisesDone = 0L;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private Set<Role> roles;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Bond> bonds;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<BondInvite> bondInvites;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<GroupEntry> groups;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<ExerciseAttempt> exerciseAttempts;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<OwnedMedal> medals;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<OwnedCustomization> customizations;

    public void incrementExercisesDone(ExerciseDifficultyEnum difficulty) {
        switch (difficulty) {
            case EASY -> easyExercisesDone++;
            case MEDIUM -> mediumExercisesDone++;
            case HARD -> hardExercisesDone++;
        }
    }
}
