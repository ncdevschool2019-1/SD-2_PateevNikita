package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.SubscriptionRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.ChargingService;
import com.netcracker.edu.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;

@Service
public class ChargingServiceImpl implements ChargingService {

    private static boolean charge;

    @Autowired
    SubscriptionService subscriptionService;

    @Autowired
    SubscriptionRepository repository;

    @Autowired
    BillingAccountService billingAccountService;

    public ChargingServiceImpl() {
        charge = true;
    }

    @Scheduled(fixedDelay = 1000)
    private void doCharge() {
        if(charge) {
            Iterable<Subscription> subscriptions = repository.findAll();
            if(subscriptions != null) {
                for (Subscription sub : subscriptions) {
                    if (sub != null) {
                        if (sub.getExpiredTime() <= (new Date()).getTime()) {
                            if (sub.getService().getCost() > billingAccountService.getBalanceFromBillingAccounts(sub.getUserId())) {
                                sub.block(false);
                                subscriptionService.updateSubscription(sub);
                            } else {
                                billingAccountService.writeOff(sub.getUserId(), sub.getService().getCost());
                                sub.charge();
                                subscriptionService.updateSubscription(sub);
                            }
                        }
                    }
                }
            }
            else {

            }
            }
        }
    }

