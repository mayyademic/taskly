package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.Workspace;
import com.example.backend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/taskly")
public class Controller {

    @Autowired
    private Service service;

    @PostMapping("/login")
    public User login(@RequestParam("username") String username, @RequestParam("password") String password) {
        System.out.println("USERNAME: " + username + " PASSWORD: " + password);
        return service.login(username, password);
    }
}