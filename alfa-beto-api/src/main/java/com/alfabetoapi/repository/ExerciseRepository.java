package com.alfabetoapi.repository;

import com.alfabetoapi.enums.ExerciseTypeEnum;
import com.alfabetoapi.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

    List<Exercise> findAllByType(ExerciseTypeEnum type);
}
