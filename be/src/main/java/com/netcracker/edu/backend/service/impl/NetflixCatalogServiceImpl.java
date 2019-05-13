package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class NetflixCatalogServiceImpl implements NetflixCatalogService {

    private int itemsPerPage = 3;

    @Autowired
    private CatalogRepository repository;

    @Override
    public List<Service> getAllNetflixCatalogByType() {
        return (List<Service>) repository.findAllByServiceTypeId(3);
    }

    @Override
    public List<Service> getAllNetflixCatalog(String page) {
        Integer currentPage = Integer.parseInt(page);
        return (List<Service>) repository.getServicesOnPage((currentPage - 1) * this.itemsPerPage, this.itemsPerPage, 3);
    }

    @Override
    public Integer getNumberOfServices() {
        return this.repository.getNumberOfServices(3);
    }
}
