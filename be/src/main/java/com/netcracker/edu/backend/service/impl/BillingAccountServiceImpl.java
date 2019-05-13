package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.BillingAccount;
import com.netcracker.edu.backend.repository.BillingAccountRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BillingAccountServiceImpl implements BillingAccountService {

    private BillingAccountRepository repository;

    @Autowired
    private UserService userService;

    @Autowired
    public BillingAccountServiceImpl(BillingAccountRepository repository) {
        this.repository = repository;
    }

    @Override
    public BillingAccount addBillingAccount(BillingAccount account) { return repository.save(account); }

    @Override
    public Iterable<BillingAccount> getBillingAccountById(Long id) {
        return userService.getUserById(id).getBillingAccounts();
    }

    @Override
    public Iterable<BillingAccount> getAllBillingAccounts() {
        return repository.findAll();
    }

    @Override
    public void deleteBillingAccount(Long id) {
        repository.deleteById(id);
    }

    @Override
    public BillingAccount addMoney(BillingAccount account) {
        if (repository.findById(account.getId()).isPresent()) {
            BillingAccount ba = repository.findById(account.getId()).get();
            if (account.getBalance() > ba.getBalance()) {
                return repository.save(account);
            } else {
                return ba;
            }
        }
        return null;
    }

    @Override
    public Double getBalanceFromBillingAccounts(Long id) {
        if(repository.getBalanceByUserId(id.toString()) != null) {
            return repository.getBalanceByUserId(id.toString());
        }
        else {
            return 0d;
        }
    }

    @Override
    public void writeOff(Long id, double cash) {
        Iterable<BillingAccount> billingAccounts = repository.findByUserId(id);

        for (BillingAccount acc : billingAccounts) {
            if(acc.getBalance() >= cash) {
                acc.writeOff(cash);
                cash = 0;
            }
            else {
                cash -= acc.getBalance();
                acc.setBalance(0);
            }
            repository.save(acc);
        }
    }
}
