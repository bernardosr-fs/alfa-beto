package com.alfabetoapi.repository;

import com.alfabetoapi.enums.CustomizationTypeEnum;
import com.alfabetoapi.model.OwnedCustomization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OwnedCustomizationRepository extends JpaRepository<OwnedCustomization, Long> {

    boolean existsByStudent_idAndCustomization_id(Long studentId, Long customizationId);

    List<OwnedCustomization> findAllByStudent_idAndCustomization_type(Long studentId, CustomizationTypeEnum type);

    OwnedCustomization findByStudent_idAndCustomization_typeAndEquipped(Long studentId, CustomizationTypeEnum type, boolean equipped);

    OwnedCustomization findByCustomization_idAndStudent_id(Long customizationId, Long studentId);
}
