package com.alfabetoapi.repository;

import com.alfabetoapi.model.Bond;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BondRepository extends JpaRepository<Bond, Long> {
}
