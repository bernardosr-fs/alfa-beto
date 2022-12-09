package com.alfabetoapi.repository;

import com.alfabetoapi.model.GroupEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupEntryRepository extends JpaRepository<GroupEntry, Long> {

    boolean existsByStudent_idAndGroup_id(Long studentId, Long groupId);

    void deleteAllByStudent_idAndGroup_responsible_id(Long studentId, Long responsibleId);
}
