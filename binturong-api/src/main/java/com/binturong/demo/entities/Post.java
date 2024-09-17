package com.binturong.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "post")
public class Post extends AbstractEntity {


    @NotNull
    @Size(min=3,max=50, message="Title must be between 3 and 50 characters")
    private String title;

    @Size(max = 255, message= "Post Limit 255 characters.")
    private String text;

    private String geoTag;

    private String file;

    private Integer likes = 0; // Initialize post with 0 likes
    private Integer shares = 0; // Initialize post with 0 shares

    @ManyToOne
    @JsonIgnore
    private User user;

    @OneToOne
    private Saves save;

    @OneToMany(mappedBy = "post")
    private List<Likes> likesList;

    public Integer getShares() {
        return shares;
    }

    public void setShares(Integer shares) {
        this.shares = shares;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
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

    public String  getGeoTag() {
        return geoTag;
    }

    public void setGeoTag(String geoTag) {
        this.geoTag = geoTag;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        file = file;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Saves getSave() {
        return save;
    }

    public void setLikesList(List<Likes> likesList) {
        this.likesList = likesList;
    }

    public void setSave(Saves save) {
        this.save = save;
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
