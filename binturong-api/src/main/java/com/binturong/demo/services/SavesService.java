package com.binturong.demo.services;

import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;

import java.util.List;
import java.util.Optional;

public interface SavesService {

    public Saves saveSaves(Saves saves);

    public List<Saves> getAllSaves(User user) ;


}
