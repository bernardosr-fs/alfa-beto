package com.alfabetoapi.repository;

import com.alfabetoapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByUserName(String userName);

    boolean existsByUserName(String userName);
}
