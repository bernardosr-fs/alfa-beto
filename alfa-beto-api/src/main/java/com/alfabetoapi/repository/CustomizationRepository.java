package com.alfabetoapi.repository;

import com.alfabetoapi.model.enums.CustomizationTypeEnum;
import com.alfabetoapi.model.Customization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomizationRepository extends JpaRepository<Customization, Long> {

    @Query("SELECT c FROM Customization c "+
            "WHERE c.id NOT IN (SELECT oc.customization.id FROM OwnedCustomization oc WHERE oc.student.id = ?1)" +
            "AND c.type = ?2")
    List<Customization> findAllNotOwnedCustomizationsOfType(Long studentId, CustomizationTypeEnum type);
}
