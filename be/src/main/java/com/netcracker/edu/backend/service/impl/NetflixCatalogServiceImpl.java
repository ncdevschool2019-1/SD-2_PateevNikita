package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NetflixCatalogServiceImpl implements NetflixCatalogService {

    private CatalogRepository repository;

    @Autowired
    public NetflixCatalogServiceImpl(CatalogRepository repository) {
        this.repository = repository;
    }

    @Override
    public Iterable<Service> getAllNetflixCatalog() {
        return repository.findAll();
    }
}
