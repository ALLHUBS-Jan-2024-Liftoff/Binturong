package com.binturong.demo.service;

import com.binturong.demo.entities.Post;

import java.util.List;


public interface PostService {

    public Post savePost(Post post);

    public List<Post> getAllPosts();




}

