package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.ServiceType;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class MusicCatalogServiceImpl implements MusicCatalogService {

    private int itemsPerPage = 3;

    @Autowired
    private CatalogRepository repository;

    @Override
    public List<Service> getAllMusicCatalogByType() {
         return (List<Service>) repository.findAllByServiceTypeId(1);
    }

    @Override
    public List<Service> getAllMusicCatalog(String page) {
        Integer currentPage = Integer.parseInt(page);
        return (List<Service>) repository.getServicesOnPage((currentPage - 1) * this.itemsPerPage, this.itemsPerPage, 1);
    }

    @Override
    public Integer getNumberOfServices() {
        return this.repository.getNumberOfServices(1);
    }
}
