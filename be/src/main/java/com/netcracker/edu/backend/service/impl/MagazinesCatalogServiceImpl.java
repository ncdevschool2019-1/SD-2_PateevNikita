package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class MagazinesCatalogServiceImpl implements MagazinesCatalogService {

    @Autowired
    private CatalogRepository repository;

    @Override
    public List<Service> getAllMagazinesCatalogByType() {
        return (List<Service>) repository.findAllByServiceTypeId(2);
    }
}
