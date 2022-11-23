package com.alfabetoapi.repository;

import com.alfabetoapi.model.Bond;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BondRepository extends JpaRepository<Bond, Long> {

    boolean existsByResponsible_idAndStudent_id(Long responsibleId, Long studentId);
}
