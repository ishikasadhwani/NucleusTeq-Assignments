package com.example.hrPortal.repository;
//this is hr repo
import com.example.hrPortal.entity.Hr;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HrRepo extends JpaRepository<Hr, Long> {
    Optional<Hr> findByEmailAndPassword(String email, String password);
}
