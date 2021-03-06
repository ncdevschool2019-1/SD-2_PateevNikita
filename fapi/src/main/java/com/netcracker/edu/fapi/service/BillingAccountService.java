package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;

import java.util.List;

public interface BillingAccountService {
    List<BillingAccountViewModel> getBillingAccounts();
    List<BillingAccountViewModel> getBillingAccountsByUserId(String id);
    void deleteBillingAccount(Long id);
    BillingAccountViewModel addBillingAccount(BillingAccountViewModel account);
    void addMoney(BillingAccountViewModel account, Long id);
    Double getBalanceFromBillingAccount(String id);
}
