// provides methods to interact with the likes tables in the database

package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Likes;
import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Likes, Integer> {

     List<Likes> findAllById(int id);

     Likes findByPostAndUser(Post post, User user);

}
