package com.alfabetoapi.repository;

import com.alfabetoapi.model.Bond;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BondRepository extends JpaRepository<Bond, Long> {

    boolean existsByResponsible_idAndStudent_id(Long responsibleId, Long studentId);

    List<Bond> findAllByStudent_id(Long studentId);
}
