package model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

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
