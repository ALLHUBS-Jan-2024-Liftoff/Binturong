package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {
    Post findAllById(Integer postId);

     List<Post> findAllByUserId(Integer userId);
}
