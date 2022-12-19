package com.alfabetoapi.repository;

import com.alfabetoapi.model.CustomizationStudent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomizationStudentRepository extends JpaRepository<CustomizationStudent, Long> {

    boolean existsByStudent_idAndCustomization_id(Long studentId, Long customizationId);
}
