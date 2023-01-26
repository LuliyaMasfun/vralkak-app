package com.example.bokningsapp.controller;

import com.example.bokningsapp.model.User;
import com.example.bokningsapp.repository.UserRepository;
import com.example.bokningsapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {


    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping(value = "/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        try {
            List<User> userList = userRepository.findAll();

            if (!userList.isEmpty()) {
                return new ResponseEntity<>(userList, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            // Kan jag få ut Error meddelandet på något sätt?

        }
    }

    @DeleteMapping(value = "user/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable long id){

        User deletedUser = userRepository.getReferenceById(id);
        try{
            if (userRepository.existsById(id)) {
                userRepository.delete(deletedUser);
                return new ResponseEntity<>(id,HttpStatus.OK);
            } else {
                return new ResponseEntity<>(id,HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping(value = "user/{id}")
    public ResponseEntity<User> updateUser2(@PathVariable long id, @RequestBody User user) {
        User updatedUser = userRepository.getReferenceById(id);

        try {
            updatedUser.setFirstName(user.getFirstName());
            updatedUser.setLastName(user.getLastName());
            updatedUser.setEmail(user.getEmail());

            userRepository.save(updatedUser);

            return new ResponseEntity<>(updatedUser,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    //ALLA NYA HTTP METODER
    @PostMapping(value = "/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser,HttpStatus.CREATED);
    }
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userService.updateUser(id, updatedUser);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }





}
