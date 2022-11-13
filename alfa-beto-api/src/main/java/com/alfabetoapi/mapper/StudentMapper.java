package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.controller.response.ResponsibleResponse;
import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.model.Responsible;
import com.alfabetoapi.model.Student;
import lombok.experimental.UtilityClass;

@UtilityClass
public class StudentMapper {

    public Student toEntity(StudentRegisterRequest request) {
        return Student.builder()
                .userName(request.getUserName())
                .build();
    }

    public StudentResponse toResponse(Student student) {
        return StudentResponse.builder()
                .id(student.getId())
                .userName(student.getUserName())
                .build();
    }
}
