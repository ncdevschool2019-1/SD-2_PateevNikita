package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import com.netcracker.edu.fapi.service.BillingAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account/billing")
public class BillingAccountController {

    @Autowired
    private BillingAccountService billingAccountService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<BillingAccountViewModel>> getBillingAccounts() {
        return ResponseEntity.ok(billingAccountService.getBillingAccounts());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBillingAccount(@PathVariable String id) {
        billingAccountService.deleteBillingAccount(Long.valueOf(id));
        return ResponseEntity.ok().build();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<BillingAccountViewModel> addBillingAccount(@RequestBody BillingAccountViewModel billingAccount /*todo server validation*/) {
        if (billingAccount != null) {
            return ResponseEntity.ok(billingAccountService.addBillingAccount(billingAccount));
        }
        return ResponseEntity.badRequest().build();
    }
}
