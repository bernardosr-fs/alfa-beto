package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.BondInviteResponse;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
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
