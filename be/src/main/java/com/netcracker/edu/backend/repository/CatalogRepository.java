package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends CrudRepository<Service, Long> {
}
