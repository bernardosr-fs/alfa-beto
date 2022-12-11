package com.alfabetoapi.controller;

import com.alfabetoapi.controller.request.EditResponsibleRequest;
import com.alfabetoapi.controller.response.ResponsibleDetailedResponse;
import com.alfabetoapi.service.ResponsibleProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/responsible/profile")
public class ResponsibleProfileController {

    private final ResponsibleProfileService responsibleProfileService;

    @GetMapping
    public ResponsibleDetailedResponse getProfile() {
        return responsibleProfileService.getProfile();
    }

    @PutMapping
    public void editProfile(@RequestBody EditResponsibleRequest request) {
        responsibleProfileService.editProfile(request);
    }
}
