package com.binturong.demo.services;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikesImpl implements LikesService{

    @Autowired
    private LikeRepository likeRepository;

    @Override
    public Likes saveLike (Likes like){return likeRepository.save(like);}

    @Override
    public List<Likes> getAllPostLikes (User user) {return likeRepository.findAllById(user.getId());}


}
