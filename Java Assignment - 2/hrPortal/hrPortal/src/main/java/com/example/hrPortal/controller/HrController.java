package com.example.hrPortal.controller;

import com.example.hrPortal.service.HrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin(origins = "http://localhost:63342")
@RestController
@RequestMapping("/hr")
public class HrController {
    @Autowired

    private final HrService hrService;

    public HrController(HrService hrService) {
        this.hrService = hrService;

    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        boolean isAuthenticated = hrService.authenticate(email, password);

        return isAuthenticated
                ? ResponseEntity.ok("Login Successful")
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }
}