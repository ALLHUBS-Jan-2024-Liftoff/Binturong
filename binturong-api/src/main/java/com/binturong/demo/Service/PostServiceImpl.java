package com.binturong.demo.Service;

import com.binturong.demo.Model.Post;
import com.binturong.demo.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;


    @Override
    public Post savePost(Post post) {
        return postRepository.save(post);
    }
}
