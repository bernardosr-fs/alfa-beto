package com.alfabetoapi.repository;

import com.alfabetoapi.model.Responsible;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResponsibleRepository extends JpaRepository<Responsible, Long> {

    Responsible findByEmail(String email);

    boolean existsByEmail(String email);

    @Query("SELECT r FROM Responsible r "+
            "WHERE r.id IN (SELECT b.responsible.id FROM Bond b WHERE b.student.id = ?1)")
    List<Responsible> findAllBondedResponsibles(Long studentId);
}
