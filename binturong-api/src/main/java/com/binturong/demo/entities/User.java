package com.binturong.demo.entities;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Entity
public class User extends AbstractEntity {

    @NotNull
    @Size(min=3,max=25,message="Username must be between 3 and 25 characters")
    private String username;


    @Email
    private String email;

    @NotNull
    private String pwHash;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(){}

    public User(String username,String password){
        this.username=username;
        this.pwHash = encoder.encode(password);
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getUsername() {
        return username;
    }
}
