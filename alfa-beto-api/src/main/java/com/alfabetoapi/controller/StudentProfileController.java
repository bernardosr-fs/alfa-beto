package com.alfabetoapi.controller;

import com.alfabetoapi.controller.request.EditStudentRequest;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.service.StudentProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/student/profile")
public class StudentProfileController {

    private final StudentProfileService studentProfileService;

    @GetMapping
    public StudentDetailedResponse getProfile() {
        return studentProfileService.getProfile();
    }

    @PutMapping("/{studentId}")
    public void editProfile(@PathVariable Long studentId, @RequestBody EditStudentRequest request) {
        studentProfileService.editProfile(studentId, request);
    }
}
