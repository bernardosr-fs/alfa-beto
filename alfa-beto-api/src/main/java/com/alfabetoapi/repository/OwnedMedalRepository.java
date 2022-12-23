package com.alfabetoapi.repository;

import com.alfabetoapi.model.OwnedMedal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnedMedalRepository extends JpaRepository<OwnedMedal, Long> {

    boolean existsByStudent_idAndMedal_id(Long studentId, Long medalId);
}
