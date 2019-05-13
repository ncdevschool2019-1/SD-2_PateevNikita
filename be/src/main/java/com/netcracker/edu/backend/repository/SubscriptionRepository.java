package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.Subscription;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends CrudRepository<Subscription, Long>{
    Subscription findByUserIdAndService(Long id, Service service);
}