package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Likes, Integer> {

     List<Likes> findAllById(int id);

     Optional<Likes> findByPostAndUser(Post post, User user);

}
