package com.alfabetoapi.repository;

import com.alfabetoapi.model.Responsible;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResponsibleRepository extends JpaRepository<Responsible, Long> {

    Responsible findByEmail(String email);
}
