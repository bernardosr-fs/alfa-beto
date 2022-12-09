package com.alfabetoapi.repository;

import com.alfabetoapi.model.StudentGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentGroupRepository extends JpaRepository<StudentGroup, Long> {

    List<StudentGroup> findAllByResponsible_id(Long responsibleId);

    @Query("SELECT g FROM StudentGroup g "+
            "WHERE g.id IN (SELECT ge.group.id FROM GroupEntry ge WHERE ge.student.id = ?1)")
    List<StudentGroup> findAllGroupsFromStudent(Long studentId);
}
