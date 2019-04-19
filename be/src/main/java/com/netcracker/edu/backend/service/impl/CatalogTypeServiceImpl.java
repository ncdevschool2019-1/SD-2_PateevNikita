/*package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.ServiceType;
import com.netcracker.edu.backend.repository.ServiceTypeRepository;
import com.netcracker.edu.backend.service.CatalogTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogTypeServiceImpl implements CatalogTypeService {

    @Autowired
    private ServiceTypeRepository serviceTypeRepository;

    @Override
    public ServiceType getServiceTypeById(long id) {
        ServiceType serviceType = serviceTypeRepository.findById(id).get();
        return serviceType;
    }
}*/
