package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MagazinesCatalogServiceImpl implements MagazinesCatalogService {

    private CatalogRepository repository;

    @Autowired
    public MagazinesCatalogServiceImpl(CatalogRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Service> getAllMagazinesCatalog() {
        return repository.findAll();
    }
}
