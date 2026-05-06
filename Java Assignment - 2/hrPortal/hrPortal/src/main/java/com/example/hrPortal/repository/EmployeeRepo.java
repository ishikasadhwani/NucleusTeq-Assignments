package com.example.hrPortal.repository;

import com.example.hrPortal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends <Employee, Long> {
}
