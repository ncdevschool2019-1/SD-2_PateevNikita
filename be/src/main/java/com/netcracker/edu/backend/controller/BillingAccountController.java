package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.BillingAccount;
import com.netcracker.edu.backend.service.BillingAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountController {

    private BillingAccountService billingAccountService;

    @Autowired
    public BillingAccountController(BillingAccountService billingAccountService) {
        this.billingAccountService = billingAccountService;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Iterable<BillingAccount> getBillingAccountsById(@PathVariable(name = "id") Long id) {
        return billingAccountService.getBillingAccountById(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<BillingAccount> getAllBillingAccounts() {
        return billingAccountService.getAllBillingAccounts();
    }

    @RequestMapping(value = "/balance/{id}", method = RequestMethod.GET)
    public Double getBalanceFromBillingAccounts(@PathVariable(name = "id") Long id){
        return billingAccountService.getBalanceFromBillingAccounts(id);
    } //proverka

    @RequestMapping(method = RequestMethod.POST)
    public BillingAccount addBillingAccount(@RequestBody BillingAccount account) {
        return billingAccountService.addBillingAccount(account);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBillingAccount(@PathVariable(name = "id") Long id) {
        billingAccountService.deleteBillingAccount(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public BillingAccount addMoney(@PathVariable(name = "id") Long id, @RequestBody BillingAccount account) {
        return billingAccountService.addMoney(account);
    }
}
