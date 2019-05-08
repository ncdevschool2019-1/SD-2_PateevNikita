package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.service.BillingAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billing-accounts")
public class BillingAccountController {

    @Autowired
    private BillingAccountService billingAccountService;

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<BillingAccountViewModel>> getBillingAccounts() {
        return ResponseEntity.ok(billingAccountService.getBillingAccounts());
    }

   // @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<BillingAccountViewModel>> getBillingAccountsByUserId(@PathVariable String id) {
        return ResponseEntity.ok(billingAccountService.getBillingAccountsByUserId(id));
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBillingAccount(@PathVariable String id) {
        billingAccountService.deleteBillingAccount(Long.valueOf(id));
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BillingAccountViewModel> addBillingAccount(@RequestBody BillingAccountViewModel billingAccount /*todo server validation*/) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountService.addBillingAccount(billingAccount));
        }
        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<BillingAccountViewModel> addMoney(@PathVariable Long id, @RequestBody BillingAccountViewModel billingAccount) {
        if (billingAccount != null) {
            billingAccountService.addMoney(billingAccount, id);
            return ResponseEntity.ok(billingAccount);
        }
        return ResponseEntity.badRequest().build();
    }
}
