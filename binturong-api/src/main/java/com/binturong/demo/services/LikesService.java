// methods for handling likes

package com.binturong.demo.services;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.User;
import com.binturong.demo.entities.Post;

import java.util.List;

public interface LikesService {

    Likes saveLike (Likes like);

    List<Likes> getAllPostLikes (User user);

    void deleteLikeByPostAndUser(Post post, User user);

    Likes findByPostAndUser(Post post, User user);

}
