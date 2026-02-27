package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.Workspace;
import com.example.backend.service.AuthService;
import com.example.backend.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/taskly")
public class Controller {

    @Autowired
    private AuthService authService;

    @Autowired
    private WorkspaceService workspaceService;

    @PostMapping("/login")
    public User login(@RequestParam("username") String username, @RequestParam("password") String password) {
        System.out.println("USERNAME: " + username + " PASSWORD: " + password);
        return authService.login(username, password);
    }

    @PostMapping(value = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public User signup(@RequestBody User user) {
        return authService.signup(user);
    }

    @GetMapping("/getWorkspceById/{id}")
    public Workspace getWorkspaceById(@PathVariable Integer id) {
        return workspaceService.getWorkspaceById(id);
    }
}