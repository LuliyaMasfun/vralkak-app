package com.example.bokningsapp.model;

import jakarta.persistence.*;

@Table
@Entity(name = "admins")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    public Admin(String name) {
        this.name = name;
    }

    public Admin() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
