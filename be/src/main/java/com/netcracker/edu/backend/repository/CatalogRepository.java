package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.ServiceType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CatalogRepository extends CrudRepository<Service, Long> {
    Iterable<Service> findAllByServiceTypeId(long id);

    @Query(value = "select count(*) from services where service_type_id=:type", nativeQuery = true)
    Integer getNumberOfServices(@Param(value = "type") Integer type);

    @Query(value = "select * from services where service_type_id=:type limit :offset, :count", nativeQuery = true)
    Iterable<Service> getServicesOnPage(@Param(value = "offset") Integer offset, @Param(value = "count") Integer count, @Param(value = "type") Integer type);
}
