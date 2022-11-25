package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.StudentResponse;
import com.alfabetoapi.service.SearchStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/search/student")
public class SearchStudentController {

    private final SearchStudentService searchStudentService;

    @GetMapping("/{userName}")
    public StudentResponse searchStudent(@PathVariable String userName) {
        return searchStudentService.searchStudent(userName);
    }
}
