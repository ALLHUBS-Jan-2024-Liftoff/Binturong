package com.binturong.demo.services;

import com.binturong.demo.entities.Comments;
import com.binturong.demo.repositorys.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsServiceImpl implements CommentService {

    @Autowired
    private CommentsRepository commentsRepository;

    @Override
    public Comments saveComments(Comments comments) {
        return commentsRepository.save(comments);
    }

    @Override
    public List<Comments> getCommentsByPostId(Integer postId) {
        return commentsRepository.findByPostId(postId);
    }

}