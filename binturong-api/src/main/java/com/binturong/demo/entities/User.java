package com.binturong.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    @NotNull
    @Size(min=3, max=25, message="Username must be between 3 and 25 characters")
    private String username;

    private String pwHash;

    @Email
    private String email;

    private String role;

    @OneToMany(mappedBy = "user")
    private final List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<Likes> likes = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private final List<Comments> comments = new ArrayList<>();

    //Encrypts the password when passing to SQL database
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public User() {}

    public User(String username,  String password, String email, String role) {
        this.username = username;
        this.pwHash = encoder.encode(password);
        this.email = email;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public boolean isMatchingPassword(String password) {

        return encoder.matches(password, pwHash);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public List<Likes> getLikes() {
        return likes;
    }

    public List<Comments> getComments() {
        return comments;
    }



}


