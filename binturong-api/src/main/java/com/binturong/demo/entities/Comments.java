package com.binturong.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Entity
public class Comments extends AbstractEntity {

    @NotNull
    @Size(max = 500, message="Max comment size is 500")
    private String text;

    private String file;

    @ManyToOne
    private Post post;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "comment")
    private final List<Likes> likes = new ArrayList<>();


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

    public String getCommentText() {
        return text;
    }

    public void setCommentText(String commentText) {
        this.text = commentText;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public List<Likes> getLikes() {
        return likes;
    }
}
