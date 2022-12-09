package com.alfabetoapi.mapper;

import com.alfabetoapi.controller.request.StudentGroupRequest;
import com.alfabetoapi.controller.response.StudentGroupResponse;
import com.alfabetoapi.model.StudentGroup;
import lombok.experimental.UtilityClass;

@UtilityClass
public class StudentGroupMapper {

    public StudentGroup toEntity(StudentGroupRequest request) {
        return StudentGroup.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();
    }

    public StudentGroupResponse toResponse(StudentGroup group) {
        return StudentGroupResponse.builder()
                .id(group.getId())
                .name(group.getName())
                .description(group.getDescription())
                .responsibleFirstName(group.getResponsible().getFirstName())
                .responsibleLastName(group.getResponsible().getLastName())
                .build();
    }
}
