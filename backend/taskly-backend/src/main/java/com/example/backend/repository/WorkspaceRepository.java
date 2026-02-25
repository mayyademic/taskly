package com.example.backend.repository;

import com.example.backend.entity.WorkspaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkspaceRepository extends JpaRepository<WorkspaceEntity, Integer> {

}
