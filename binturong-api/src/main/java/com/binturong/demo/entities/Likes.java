package com.binturong.demo.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Likes extends AbstractEntity{

    @ManyToOne
    private Post post;

    @ManyToOne
    private User user;

    @ManyToOne
    private Comments comment;

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comments getComment() {
        return comment;
    }

    public void setComment(Comments comment) {
        this.comment = comment;
    }
}
