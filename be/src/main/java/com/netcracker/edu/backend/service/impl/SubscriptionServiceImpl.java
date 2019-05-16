package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.SubscriptionRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.SubscriptionService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{

    @Autowired
    private SubscriptionRepository repository;

    @Autowired
    private UserService userService;

    @Autowired
    private BillingAccountService billingAccountService;

    @Override
    public Iterable<Subscription> getSubscriptionsByUserId(Long user_id) {
        return userService.getUserById(user_id).getSubscriptions();
    }

    @Override
    public Subscription addSubscription(Subscription subscription) {
        Subscription sub = new Subscription(10000, true, subscription.getUserId(), subscription.getService());
        billingAccountService.writeOff(sub.getUserId(), sub.getService().getCost());
        return repository.save(sub);
    }

    @Override
    public void deleteSubscription(Long id) {
        repository.deleteById(id);
    }


    @Override
    public Subscription findByUserIdAndService(Long user_id, com.netcracker.edu.backend.entity.Service service) {
        return repository.findByUserIdAndService(user_id, service);
    }

    @Scheduled(fixedDelay = 2000)
    private void chargingService() {
            Iterable<Subscription> subscriptions = repository.findAll();
            if(subscriptions != null) {
                for (Subscription sub : subscriptions) {
                    if (sub != null) {
                        if (sub.getExpiredTime() <= (new Date()).getTime()) {
                            if (sub.getService().getCost() > billingAccountService.getBalanceFromBillingAccounts(sub.getUserId())) {
                                Date date = new Date();
                                sub.setStartTime(date.getTime());
                                sub.setActive(false);
                                repository.save(sub);
                            } else {
                                billingAccountService.writeOff(sub.getUserId(), sub.getService().getCost());
                                sub.reload();
                                repository.save(sub);
                            }
                        }
                    }
                }
            }
        }
}
