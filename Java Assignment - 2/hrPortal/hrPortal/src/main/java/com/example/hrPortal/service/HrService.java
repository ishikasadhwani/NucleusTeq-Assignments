package com.example.hrPortal.service;

import com.example.hrPortal.repository.HrRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HrService {

    @Autowired
    private HrRepo hrRepository;

    public boolean authenticate(String email, String password) {
        return hrRepository.findByEmailAndPassword(email, password).isPresent();
    }
}