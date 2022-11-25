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

    @GetMapping("/bonded-students")
    public List<StudentDetailedResponse> getAllBondedStudents() {
        return bondService.getAllBondedStudents();
    }

    @GetMapping("/bonded-responsibles")
    public List<ResponsibleDetailedResponse> getAllBondedResponsibles() {
        return bondService.getAllBondedResponsibles();
    }

    @GetMapping("/{studentId}")
    public List<BondedResponsibleResponse> getAllBondsFromStudent(@PathVariable Long studentId) {
        return bondService.getAllBondsFromStudent(studentId);
    }

    @GetMapping("/invites")
    public List<BondInviteResponse> getAllPendingInvites() {
        return bondService.getAllPendingInvites();
    }

    @PostMapping("/send-invite/{studentId}")
    public void sendInvite(@PathVariable Long studentId) {
        bondService.sendInvite(studentId);
    }

    @PostMapping("/accept-invite/{inviteId}")
    public void acceptInvite(@PathVariable Long inviteId) {
        bondService.acceptInvite(inviteId);
    }

    @PutMapping("/recuse-invite/{inviteId}")
    public void recuseInvite(@PathVariable Long inviteId) {
        bondService.recuseInvite(inviteId);
    }
}
