package com.alfabetoapi.controller;

import com.alfabetoapi.controller.request.EditStudentRequest;
import com.alfabetoapi.controller.response.OwnedCustomizationResponse;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.enums.CustomizationTypeEnum;
import com.alfabetoapi.service.StudentProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/customizations/avatars")
    public List<OwnedCustomizationResponse> getAllOwnedAvatars() {
        return studentProfileService.getOwnedCustomizations(CustomizationTypeEnum.AVATAR);
    }

    @GetMapping("/customizations/profile-colors")
    public List<OwnedCustomizationResponse> getAllOwnedProfileColors() {
        return studentProfileService.getOwnedCustomizations(CustomizationTypeEnum.PROFILE_COLOR);
    }

    @PutMapping("/{studentId}")
    public void editProfile(@PathVariable Long studentId, @RequestBody EditStudentRequest request) {
        studentProfileService.editProfile(studentId, request);
    }

    @PutMapping("/customizations/{customizationId}/equip")
    public void equipCustomization(@PathVariable Long customizationId) {
        studentProfileService.equipCustomization(customizationId);
    }
}
