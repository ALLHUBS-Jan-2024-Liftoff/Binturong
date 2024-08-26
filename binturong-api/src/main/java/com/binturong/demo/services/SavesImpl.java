package com.binturong.demo.services;

import com.binturong.demo.entities.Saves;
import com.binturong.demo.entities.User;
import com.binturong.demo.repositorys.SavesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SavesImpl implements    SavesService {

    @Autowired
    private SavesRepository savesRepository;

    @Override
    public Saves saveSaves(Saves saves){return savesRepository.save(saves);}

    @Override
    public List<Saves> getAllSaves(User user){return savesRepository.findAllById(user.getId());}
}
