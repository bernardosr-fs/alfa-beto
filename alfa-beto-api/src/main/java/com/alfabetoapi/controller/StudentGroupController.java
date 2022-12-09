package com.alfabetoapi.controller;

import com.alfabetoapi.controller.request.AddStudentRequest;
import com.alfabetoapi.controller.request.StudentGroupRequest;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.controller.response.StudentGroupResponse;
import com.alfabetoapi.service.StudentGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/group")
public class StudentGroupController {

    private final StudentGroupService studentGroupService;

    @GetMapping("/of-responsible/list")
    public List<StudentGroupResponse> responsibleGetAllGroups() {
        return studentGroupService.responsibleGetAllGroups();
    }

    @GetMapping("/of-responsible/{groupId}/students")
    public List<StudentDetailedResponse> responsibleGetAllStudentsInGroup(@PathVariable Long groupId) {
        return studentGroupService.responsibleGetAllStudentsInGroup(groupId);
    }

    @GetMapping("/of-student/list")
    public List<StudentGroupResponse> studentGetAllGroups() {
        return studentGroupService.studentGetAllGroups();
    }

    @GetMapping("/of-student/{groupId}/students")
    public List<StudentDetailedResponse> studentGetAllStudentsInGroup(@PathVariable Long groupId) {
        return studentGroupService.studentGetAllStudentsInGroup(groupId);
    }

    @PostMapping("/create")
    public void createGroup(@RequestBody StudentGroupRequest request) {
        studentGroupService.createGroup(request);
    }

    @PostMapping("/add")
    public void addStudent(@RequestBody AddStudentRequest request) {
        studentGroupService.addStudent(request);
    }
}
