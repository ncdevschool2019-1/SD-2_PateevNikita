package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;

public interface NetflixCatalogService {
    Iterable<Service> getAllNetflixCatalogByType();
}
