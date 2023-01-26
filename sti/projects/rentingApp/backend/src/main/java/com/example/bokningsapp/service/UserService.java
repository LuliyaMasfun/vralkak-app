package com.example.bokningsapp.service;

import com.example.bokningsapp.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {


    ResponseEntity<User> getUser(long id);

    ResponseEntity<List<User>> getAllUsers(String userName); //dubbelchecka denna med Kristoffer
    ResponseEntity<User> saveUser (User user);
    ResponseEntity<User> updateUser2(User user);
    ResponseEntity<User> deleteUser (long id);
    public User createUser(User user);
    public String encryptPassword(String password);
    public User updateUser(Long id, User updatedUser);

}
