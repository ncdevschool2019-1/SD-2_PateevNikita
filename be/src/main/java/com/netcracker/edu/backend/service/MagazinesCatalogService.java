package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;

public interface MagazinesCatalogService {
    Iterable<Service> getAllMagazinesCatalogByType();
    Iterable<Service> getAllMagazinesCatalog(String page);
    Integer getNumberOfServices();
}
