package com.alfabetoapi.service;

import com.alfabetoapi.controller.response.ExerciseAttemptResponse;
import com.alfabetoapi.controller.response.ExerciseResponse;
import com.alfabetoapi.model.enums.ExerciseAttemptStatusEnum;
import com.alfabetoapi.model.enums.ExerciseTypeEnum;
import com.alfabetoapi.mapper.ExerciseAttemptMapper;
import com.alfabetoapi.mapper.ExerciseMapper;
import com.alfabetoapi.model.ExerciseAttempt;
import com.alfabetoapi.repository.ExerciseAttemptRepository;
import com.alfabetoapi.repository.ExerciseRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExerciseService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;
    private final MedalService medalService;

    private final ExerciseRepository exerciseRepository;
    private final ExerciseAttemptRepository exerciseAttemptRepository;
    private final StudentRepository studentRepository;

    public List<ExerciseResponse> getExercises(ExerciseTypeEnum type) {
        var exercises = exerciseRepository.findAllByType(type);

        return exercises.stream().map(ExerciseMapper::toResponse).collect(Collectors.toList());
    }

    public ExerciseAttemptResponse startExercise(Long exerciseId) {
        var exercise = findByIdService.findExercise(exerciseId);

        var student = loginService.getLoggedStudent();

        exerciseAttemptRepository.deleteAllByStudent_idAndExercise_idAndStatus(student.getId(), exercise.getId(), ExerciseAttemptStatusEnum.STARTED);

        var exerciseAttempt = ExerciseAttempt.builder()
                .student(student)
                .exercise(exercise)
                .build();

        exerciseAttemptRepository.save(exerciseAttempt);

        return ExerciseAttemptMapper.toResponse(exercise, exerciseAttempt);
    }

    public void finishExercise(Long attemptId) {
        var exerciseAttempt = findByIdService.findExerciseAttempt(attemptId);

        var student = loginService.getLoggedStudent();

        if (!exerciseAttempt.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Essa tentativa de exercício não é sua.");

        if (!exerciseAttempt.getStatus().equals(ExerciseAttemptStatusEnum.STARTED))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Essa tentativa de exercício já foi finalizada ou falhada.");

        student.incrementExercisesDone(exerciseAttempt.getExercise().getDifficulty());
        student.setCoins(student.getCoins().add(exerciseAttempt.getExercise().getRewardCoins()));

        studentRepository.save(student);

        exerciseAttempt.setStatus(ExerciseAttemptStatusEnum.FINISHED);

        exerciseAttemptRepository.save(exerciseAttempt);

        medalService.checkForExerciseMedals(student, exerciseAttempt.getExercise().getType());
    }

    public void failExercise(Long attemptId) {
        var exerciseAttempt = findByIdService.findExerciseAttempt(attemptId);

        var student = loginService.getLoggedStudent();

        if (!exerciseAttempt.getStudent().getId().equals(student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Essa tentativa de exercício não é sua.");

        if (!exerciseAttempt.getStatus().equals(ExerciseAttemptStatusEnum.STARTED))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Essa tentativa de exercício já foi finalizada ou falhada.");

        exerciseAttempt.setStatus(ExerciseAttemptStatusEnum.FAILED);

        exerciseAttemptRepository.save(exerciseAttempt);
    }
}
