package com.binturong.demo.entities;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public class User extends AbstractEntity {

    @NotNull
    @Size(min=3,max=25,message="Username must be between 3 and 25 characters")
    private String username;

    @NotNull
    @Email
    private String email;
}
