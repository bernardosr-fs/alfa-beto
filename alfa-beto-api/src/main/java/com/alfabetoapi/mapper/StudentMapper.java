package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.model.OwnedCustomization;
import com.alfabetoapi.model.OwnedMedal;
import com.alfabetoapi.model.Student;
import lombok.experimental.UtilityClass;

import java.util.List;
import java.util.stream.Collectors;

@UtilityClass
public class StudentMapper {

    public Student toEntity(StudentRegisterRequest request) {
        return Student.builder()
                .userName(request.getUserName())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .build();
    }

    public StudentResponse toResponse(Student student) {
        return StudentResponse.builder()
                .id(student.getId())
                .userName(student.getUserName())
                .build();
    }

    public StudentDetailedResponse toDetailedResponse(Student student, boolean firstBond) {
        return StudentDetailedResponse.builder()
                .id(student.getId())
                .userName(student.getUserName())
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .coins(student.getCoins())
                .firstBond(firstBond)
                .equippedCustomizations(student.getCustomizations().stream().map(OwnedCustomizationMapper::toResponse).collect(Collectors.toList()))
                .achievedMedals(student.getMedals().stream().map(MedalMapper::toResponse).collect(Collectors.toList()))
                .build();
    }
}
