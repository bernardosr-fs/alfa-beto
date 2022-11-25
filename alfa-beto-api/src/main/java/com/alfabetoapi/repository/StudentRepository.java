package com.alfabetoapi.repository;

import com.alfabetoapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByUserName(String userName);

    boolean existsByUserName(String userName);

    @Query("SELECT s FROM Student s "+
            "WHERE s.id IN (SELECT b.student.id FROM Bond b WHERE b.responsible.id = ?1)")
    List<Student> findAllBondedStudents(Long responsibleId);
}
