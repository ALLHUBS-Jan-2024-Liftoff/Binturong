package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Likes,Integer> {

     List<Likes> findAllById(int id);
}
