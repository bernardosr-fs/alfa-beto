package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.*;
import com.alfabetoapi.service.BondService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/bond")
public class BondController {

    private final BondService bondService;

    @GetMapping("/students")
    public List<StudentDetailedResponse> getAllBondedStudents() {
        return bondService.getAllBondedStudents();
    }

    @GetMapping("/responsibles")
    public List<ResponsibleDetailedResponse> getAllBondedResponsibles() {
        return bondService.getAllBondedResponsibles();
    }

    @GetMapping("/{studentId}/responsibles")
    public List<BondedResponsibleResponse> getAllBondsFromBondedStudent(@PathVariable Long studentId) {
        return bondService.getAllBondsFromBondedStudent(studentId);
    }

    @DeleteMapping("/{bondId}/delete")
    public void deleteBondFromBondedStudent(@PathVariable Long bondId) {
        bondService.deleteBondFromBondedStudent(bondId);
    }
}
