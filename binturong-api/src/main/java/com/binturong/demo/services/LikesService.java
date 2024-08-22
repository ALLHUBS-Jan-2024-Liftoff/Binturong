package com.binturong.demo.services;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.User;

import java.util.List;

public interface LikesService {

    public Likes saveLike (Likes like);

    public List<Likes> getAllPostLikes (User user);
}
