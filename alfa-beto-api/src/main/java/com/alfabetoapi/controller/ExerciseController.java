package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.ExerciseAttemptResponse;
import com.alfabetoapi.controller.response.ExerciseResponse;
import com.alfabetoapi.model.enums.ExerciseTypeEnum;
import com.alfabetoapi.service.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/exercise")
public class ExerciseController {

    private final ExerciseService exerciseService;

    @GetMapping("/list/portuguese")
    public List<ExerciseResponse> getAllPortugueseExercises() {
        return exerciseService.getExercises(ExerciseTypeEnum.PORTUGUESE);
    }

    @GetMapping("/list/math")
    public List<ExerciseResponse> getAllMathExercises() {
        return exerciseService.getExercises(ExerciseTypeEnum.MATH);
    }

    @PostMapping("/{exerciseId}/start")
    public ExerciseAttemptResponse startExercise(@PathVariable Long exerciseId) {
        return exerciseService.startExercise(exerciseId);
    }

    @PutMapping("/attempt/{attemptId}/finish")
    public void finishExercise(@PathVariable Long attemptId) {
        exerciseService.finishExercise(attemptId);
    }

    @PutMapping("/attempt/{attemptId}/fail")
    public void failExercise(@PathVariable Long attemptId) {
        exerciseService.failExercise(attemptId);
    }
}
