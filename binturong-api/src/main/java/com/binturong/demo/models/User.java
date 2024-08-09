package com.binturong.demo.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class User extends AbstractEntity {

    @NotNull
    @Size (min = 4, max = 18, message = "Invalid username. Username must contain 4 to 18 characters.")
    private String username;

    @NotNull
    @Email
    private String email;
}
