package com.binturong.demo.services;

import com.binturong.demo.entities.Post;

import java.util.List;


public interface PostService {

    public Post savePost(Post post);

    public List<Post> getAllPosts();




}


