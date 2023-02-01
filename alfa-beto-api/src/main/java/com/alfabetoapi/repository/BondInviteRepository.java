package com.alfabetoapi.repository;

import com.alfabetoapi.model.enums.BondInviteStatusEnum;
import com.alfabetoapi.model.BondInvite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BondInviteRepository extends JpaRepository<BondInvite, Long> {

    boolean existsByResponsible_idAndStudent_idAndStatus(Long responsibleId, Long studentId, BondInviteStatusEnum status);

    List<BondInvite> findAllByStudent_idAndStatusOrderByDateDesc(Long studentId, BondInviteStatusEnum status);
}
