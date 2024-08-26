package com.binturong.demo.services;

import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.PostRepository;
import com.binturong.demo.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> getAllUserPosts(User user) {return null;}

    @Override
    public Post getPost(Integer id) {return postRepository.findAllById(id);}




}


