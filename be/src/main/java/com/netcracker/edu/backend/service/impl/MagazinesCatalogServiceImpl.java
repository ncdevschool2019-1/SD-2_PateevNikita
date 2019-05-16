package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class MagazinesCatalogServiceImpl implements MagazinesCatalogService {

    private int itemsPerPage = 3;

    @Autowired
    private CatalogRepository repository;

    @Override
    public List<Service> getAllMagazinesCatalogByType() {
        return (List<Service>) repository.findAllByServiceTypeId(2);
    }

    @Override
    public List<Service> getAllMagazinesCatalog(String page) {
        Integer currentPage = Integer.parseInt(page);
        return (List<Service>) repository.getServicesOnPage((currentPage - 1) * this.itemsPerPage, this.itemsPerPage, 2);
    }

    @Override
    public Integer getNumberOfServices() {
        return this.repository.getNumberOfServices(2);
    }
}
