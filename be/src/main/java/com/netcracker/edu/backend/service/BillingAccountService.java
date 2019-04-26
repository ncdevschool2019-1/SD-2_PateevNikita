package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.BillingAccount;

import java.util.Optional;

public interface BillingAccountService {
    Optional<BillingAccount> getBillingAccountById(Long id);
    Iterable<BillingAccount> getAllBillingAccounts();
    void deleteBillingAccount(Long id);
    BillingAccount addBillingAccount(BillingAccount account);
    BillingAccount addMoney(BillingAccount account);
}
