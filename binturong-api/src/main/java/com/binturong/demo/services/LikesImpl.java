// implements the LikesService interface

package com.binturong.demo.services;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.User;
import com.binturong.demo.entities.Post;
import com.binturong.demo.repositorys.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikesImpl implements LikesService {

    @Autowired
    private LikeRepository likeRepository;

    @Override
    public Likes saveLike (Likes like){ return likeRepository.save(like); }

    @Override
    public List<Likes> getAllPostLikes (User user) { return likeRepository.findAllById(user.getId()); }


    @Override
    public void deleteLikeByPostAndUser(Post post, User user) {
        Likes like = likeRepository.findByPostAndUser(post, user);
        if (like != null) {
            likeRepository.delete(like);
        }
    }

        @Override
        public Likes findByPostAndUser(Post post, User user) {
            return likeRepository.findByPostAndUser(post, user);
        }

}
