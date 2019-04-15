package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MusicCatalogServiceImpl implements MusicCatalogService {

    private CatalogRepository repository;

    @Autowired
    public MusicCatalogServiceImpl(CatalogRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Service> getAllMusicCatalog() {
        return repository.findAll();
    }
}
