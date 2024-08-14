package com.binturong.demo.entities;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import javax.swing.text.StyledEditorKit;
import java.util.Objects;

@Entity
public class Post extends AbstractEntity {


    @NotNull
    @Size(min=3,max=50, message="Title must be between 3 and 50 characters")
    private String title;


    @Size(max = 255, message= "Post Limit 255 characters.")
    private String text;

    private Boolean geoTag;

    private String file;

    private int userId;

    public void setUserId(User user){
        this.userId= user.getId();
    }



    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getGeoTag() {
        return geoTag;
    }

    public void setGeoTag(Boolean geoTag) {
        this.geoTag = geoTag;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        file = file;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Post post = (Post) o;
        return Objects.equals(title, post.title) && Objects.equals(text, post.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), title, text);
    }
}
