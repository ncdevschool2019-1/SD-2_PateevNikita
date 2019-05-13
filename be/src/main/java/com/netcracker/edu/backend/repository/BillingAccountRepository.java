package com.netcracker.edu.backend.repository;

import com.netcracker.edu.backend.entity.BillingAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingAccountRepository extends CrudRepository<BillingAccount, Long> {

    @Query(value = "select sum(balance) from billingaccounts where user_id = ?", nativeQuery = true)
    Double getBalanceByUserId(String id);

    @Query(value = "select * from billingaccounts where user_id = ?", nativeQuery = true)
    Iterable<BillingAccount> findByUserId(Long id);
}
