package com.example.hrPortal.repository;

import com.example.hrPortal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
//this is hr portal repo
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
