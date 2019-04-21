package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.ServiceType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceTypeRepository extends CrudRepository<ServiceType, Long>{
}
