package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.ServiceType;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class MusicCatalogServiceImpl implements MusicCatalogService {

    @Autowired
    private CatalogRepository repository;

    @Override
    public List<Service> getAllMusicCatalogByType() {
         ServiceType serviceType = new ServiceType("music");
         return (List<Service>) repository.findAllByType(serviceType.getService());
    }
}
