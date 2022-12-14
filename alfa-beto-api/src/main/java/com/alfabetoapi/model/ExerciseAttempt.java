package com.alfabetoapi.model;

import com.alfabetoapi.enums.ExerciseAttemptStatusEnum;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ExerciseAttempt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private LocalDate date = LocalDate.now();

    @Builder.Default
    @Enumerated(EnumType.STRING)
    private ExerciseAttemptStatusEnum status = ExerciseAttemptStatusEnum.STARTED;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
