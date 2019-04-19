/*package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.ServiceType;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.CatalogTypeService;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@org.springframework.stereotype.Service
public class MagazinesCatalogServiceImpl implements MagazinesCatalogService {

    @Autowired
    private CatalogRepository repository;

    @Autowired
    private CatalogTypeService catalogTypeService;



    @Override
    public List<Service> getAllMagazinesCatalogByType() {
        String type = catalogTypeService.getServiceTypeById(2).getService();
        return (List<Service>) repository.findAllByType(type);
    }
}*/
