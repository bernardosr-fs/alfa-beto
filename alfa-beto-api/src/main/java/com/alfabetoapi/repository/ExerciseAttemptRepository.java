package com.alfabetoapi.repository;

import com.alfabetoapi.enums.ExerciseAttemptStatusEnum;
import com.alfabetoapi.enums.ExerciseTypeEnum;
import com.alfabetoapi.model.ExerciseAttempt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface ExerciseAttemptRepository extends JpaRepository<ExerciseAttempt, Long> {


    @Transactional
    void deleteAllByStudent_idAndExercise_idAndStatus(Long studentId, Long exerciseId, ExerciseAttemptStatusEnum status);

    Long countByStudent_idAndExercise_typeAndStatus(Long studentId, ExerciseTypeEnum type, ExerciseAttemptStatusEnum status);
}
