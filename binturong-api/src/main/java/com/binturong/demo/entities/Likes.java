package com.binturong.demo.entities;


import jakarta.persistence.Entity;

@Entity
public class Likes extends AbstractEntity{

    private int userId;

    private int postId;

    public void setPostid(Post post){
        this.postId=post.getId();
    }

    public void setUserId(User user){
        this.userId= user.getId();
    }



}
