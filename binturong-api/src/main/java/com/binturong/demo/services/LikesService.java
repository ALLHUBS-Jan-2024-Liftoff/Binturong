package com.binturong.demo.services;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.User;
import com.binturong.demo.entities.Post;

import java.util.List;
import java.util.Optional;

public interface LikesService {

    public Likes saveLike (Likes like);

    public List<Likes> getAllPostLikes (User user);

    void deleteLikeByPostAndUser(Post post, User user);

    Optional<Likes> findByPostAndUser(Post post, User user);

}
