package com.binturong.demo.repositorys;

import com.binturong.demo.entities.Saves;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavesRepository extends JpaRepository<Saves,Integer> {
}
