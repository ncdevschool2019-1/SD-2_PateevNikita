package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;
import com.netcracker.edu.fapi.service.SubscriptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/subscriptions")
public class SubscriptionsController {

    @Autowired
    private SubscriptionsService subscriptionsService;

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<SubscriptionViewModel>> getSubscriptionsByUserId(@PathVariable String id) {
        return ResponseEntity.ok(subscriptionsService.getSubscriptionsByUserId(Long.valueOf(id)));
    }

    @PreAuthorize("hasRole('User')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<SubscriptionViewModel> addSubscription(@RequestBody SubscriptionViewModel subscription) {
        if (subscription != null) {
            return ResponseEntity.ok(subscriptionsService.addSubscription(subscription));
        }
        return ResponseEntity.badRequest().build();
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteSubscription(@PathVariable String id) {
        subscriptionsService.deleteSubscription(Long.valueOf(id));
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('User') or hasRole('Admin')")
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<SubscriptionViewModel> changeSubscriptionStatus(@RequestBody SubscriptionViewModel subscription) {
        if (subscription != null) {
            subscriptionsService.changeSubscriptionStatus(subscription);
            return ResponseEntity.ok(subscription);
        }
        return ResponseEntity.badRequest().build();
    }

    @RequestMapping(value = "/count/{id}", method = RequestMethod.GET)
    public ResponseEntity<Integer> getUsersCount(@PathVariable String id) {
        return ResponseEntity.ok(subscriptionsService.getUsersCount(Integer.valueOf(id)));
    }
}
