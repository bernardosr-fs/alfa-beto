package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.BondInviteResponse;
import com.alfabetoapi.service.BondInviteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/bond-invite")
public class BondInviteController {

    private final BondInviteService bondInviteService;

    @GetMapping("/pending-invites")
    public List<BondInviteResponse> getAllPendingInvites() {
        return bondInviteService.getAllPendingInvites();
    }

    @PostMapping("/send/{studentId}")
    public void sendInvite(@PathVariable Long studentId) {
        bondInviteService.sendInvite(studentId);
    }

    @PostMapping("/{inviteId}/accept")
    public void acceptInvite(@PathVariable Long inviteId) {
        bondInviteService.acceptInvite(inviteId);
    }

    @PutMapping("/{inviteId}/recuse")
    public void recuseInvite(@PathVariable Long inviteId) {
        bondInviteService.recuseInvite(inviteId);
    }
}
