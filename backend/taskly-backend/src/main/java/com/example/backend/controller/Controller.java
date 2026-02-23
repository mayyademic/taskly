package com.example.backend.controller;

import com.example.backend.model.Workspace;
import com.example.backend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/taskly")
public class Controller {

    @Autowired
    private Service service;

    @GetMapping("/login")
    public Integer login(@RequestParam("username") String username, @RequestParam("password") String password) {
        return service.login(username, password);
    }
}