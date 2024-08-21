package com.binturong.demo.entities;

import jakarta.persistence.Entity;

@Entity
public class Saves extends AbstractEntity{

    private int userId;

    public void setUserId(User user){
        this.userId= user.getId();
    }


}
