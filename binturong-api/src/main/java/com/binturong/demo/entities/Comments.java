package com.binturong.demo.entities;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Entity
public class Comments extends AbstractEntity {

    @NotNull
    @Size(max = 500, message="Max comment size is 500")
    private String commentText;


    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }
}
