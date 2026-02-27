package com.example.backend.repository;

import com.example.backend.entity.WorkspaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorkspaceRepository extends JpaRepository<WorkspaceEntity, Integer> {
    @Query("""
                SELECT DISTINCT w
                FROM WorkspaceEntity w
                LEFT JOIN FETCH w.groups g
                LEFT JOIN FETCH g.tasks
                WHERE w.id = :id
            """)
    Optional<WorkspaceEntity> findWorkspaceWithGroupsAndTasks(@Param("id") Integer id);
}
