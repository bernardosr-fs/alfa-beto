package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.AddStudentRequest;
import com.alfabetoapi.controller.request.StudentGroupRequest;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.controller.response.StudentGroupResponse;
import com.alfabetoapi.mapper.StudentGroupMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.model.GroupEntry;
import com.alfabetoapi.repository.*;
import com.alfabetoapi.security.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentGroupService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final StudentGroupRepository studentGroupRepository;
    private final GroupEntryRepository groupEntryRepository;
    private final BondRepository bondRepository;
    private final StudentRepository studentRepository;
    private final OwnedCustomizationRepository ownedCustomizationRepository;

    public void createGroup(StudentGroupRequest request) {
        var responsible = loginService.getLoggedResponsible();

        var group = StudentGroupMapper.toEntity(request);
        group.setResponsible(responsible);

        studentGroupRepository.save(group);
    }

    public void addStudent(AddStudentRequest request) {
        var student = findByIdService.findStudent(request.getStudentId());
        var group = findByIdService.findGroup(request.getGroupId());

        var responsible = loginService.getLoggedResponsible();

        if (!bondRepository.existsByResponsible_idAndStudent_id(responsible.getId(), student.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Não existe um vínculo entre você e esse estudante.");

        if (!group.getResponsible().getId().equals(responsible.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse grupo não é seu.");

        if (groupEntryRepository.existsByStudent_idAndGroup_id(student.getId(), group.getId()))
            throw new ResponseStatusException(HttpStatus.FOUND, "Esse estudante já está nesse grupo.");

        var groupEntry = GroupEntry.builder()
                .student(student)
                .group(group)
                .build();

        groupEntryRepository.save(groupEntry);
    }

    public List<StudentGroupResponse> responsibleGetAllGroups() {
        var responsible = loginService.getLoggedResponsible();

        var groups = studentGroupRepository.findAllByResponsible_id(responsible.getId());

        return groups.stream().map(StudentGroupMapper::toResponse).collect(Collectors.toList());
    }

    public List<StudentGroupResponse> studentGetAllGroups() {
        var student = loginService.getLoggedStudent();

        var groups = studentGroupRepository.findAllGroupsFromStudent(student.getId());

        return groups.stream().map(StudentGroupMapper::toResponse).collect(Collectors.toList());
    }

    public List<StudentDetailedResponse> responsibleGetAllStudentsInGroup(Long groupId) {
        var group = findByIdService.findGroup(groupId);

        var responsible = loginService.getLoggedResponsible();

        if (!group.getResponsible().getId().equals(responsible.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse grupo não é seu.");

        var students = studentRepository.findAllStudentsInGroup(group.getId());
        var firstBondedStudentsIds = bondRepository.findAllFirstBondedStudentsIds(responsible.getId());

        return students.stream().map(s -> {
            if (firstBondedStudentsIds.contains(s.getId()))
                return StudentMapper.toDetailedResponse(s, true);
            return StudentMapper.toDetailedResponse(s, false);
        }).collect(Collectors.toList());
    }

    public List<StudentDetailedResponse> studentGetAllStudentsInGroup(Long groupId) {
        var group = findByIdService.findGroup(groupId);

        var student = loginService.getLoggedStudent();

        if (!groupEntryRepository.existsByStudent_idAndGroup_id(student.getId(), group.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Você não está nesse grupo.");

        var students = studentRepository.findAllStudentsInGroup(group.getId())
                .stream().filter(s -> !s.getId().equals(student.getId()));

        return students.map(s -> StudentMapper.toDetailedResponse(s, false)).collect(Collectors.toList());
    }

    public void editGroup(Long groupId, StudentGroupRequest request) {
        var group = findByIdService.findGroup(groupId);

        var responsible = loginService.getLoggedResponsible();

        if (!group.getResponsible().getId().equals(responsible.getId()))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Esse grupo não é seu.");

        group.setName(request.getName());
        group.setDescription(request.getDescription());

        studentGroupRepository.save(group);
    }
}
