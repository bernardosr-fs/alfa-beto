package com.alfabetoapi.service;

import com.alfabetoapi.enums.ExerciseAttemptStatusEnum;
import com.alfabetoapi.enums.ExerciseTypeEnum;
import com.alfabetoapi.model.OwnedMedal;
import com.alfabetoapi.model.Student;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.ExerciseAttemptRepository;
import com.alfabetoapi.repository.OwnedMedalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedalService {

    private final FindByIdService findByIdService;

    private final OwnedMedalRepository ownedMedalRepository;
    private final ExerciseAttemptRepository exerciseAttemptRepository;
    private final BondRepository bondRepository;

    public void checkForExerciseMedals(Student student, ExerciseTypeEnum type) {
        switch (type) {
            case PORTUGUESE -> checkForPortugueseMedals(student);
            case MATH -> checkForMathMedals(student);
        }
    }

    public void checkForPortugueseMedals(Student student) {
        Long count = exerciseAttemptRepository
                .countByStudent_idAndExercise_typeAndStatus(student.getId(), ExerciseTypeEnum.PORTUGUESE, ExerciseAttemptStatusEnum.FINISHED);

        checkForMedal(student, 1L, count);
        checkForMedal(student, 2L, count);
        checkForMedal(student, 3L, count);
    }

    public void checkForMathMedals(Student student) {
        Long count = exerciseAttemptRepository
                .countByStudent_idAndExercise_typeAndStatus(student.getId(), ExerciseTypeEnum.MATH, ExerciseAttemptStatusEnum.FINISHED);

        checkForMedal(student, 4L, count);
        checkForMedal(student, 5L, count);
        checkForMedal(student, 6L, count);
    }

    public void checkForBondMedals(Student student) {
        Long count = bondRepository.countByStudent_id(student.getId());

        checkForMedal(student, 7L, count);
        checkForMedal(student, 8L, count);
        checkForMedal(student, 9L, count);
    }

    public void checkForMedal(Student student, Long medalId, Long count) {
        if (!ownedMedalRepository.existsByStudent_idAndMedal_id(student.getId(), medalId)) {
            var medal = findByIdService.findMedal(medalId);

            if (count >= medal.getAchievingCondition()) {
                var ownedMedal = OwnedMedal.builder()
                        .student(student)
                        .medal(medal)
                        .build();

                ownedMedalRepository.save(ownedMedal);
            }
        }
    }
}
