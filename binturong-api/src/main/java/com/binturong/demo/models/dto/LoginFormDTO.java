package com.binturong.demo.models.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginFormDTO {

    @NotNull
    @NotBlank
    @Size(min = 4, max = 18, message = "Invalid username. Username must contain 4 to 18 characters.")
    private String username;

    @NotNull
    @NotBlank
    @Size (min = 8, max = 30, message = "Invalid password. Password must contain 8 to 30 characters. ")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword (String password) {
        this.password = password;
    }
}
