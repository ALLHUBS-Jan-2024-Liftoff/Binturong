package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository <Comments,Integer> {
    List<Comments> findAllById(int id);
}
