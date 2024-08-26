package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Post;
import com.binturong.demo.entities.Saves;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SavesRepository extends JpaRepository<Saves,Integer> {

    List<Saves> findAllById(Integer id);

    List<Saves> findAllByUserId(Integer userId);


}
