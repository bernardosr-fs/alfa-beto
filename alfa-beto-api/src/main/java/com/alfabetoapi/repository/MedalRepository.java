package com.alfabetoapi.repository;

import com.alfabetoapi.model.Medal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedalRepository extends JpaRepository<Medal, Long> {
}
