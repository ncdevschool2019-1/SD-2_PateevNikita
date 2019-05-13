package com.netcracker.edu.backend.service.impl;

import com.netcracker.edu.backend.entity.Subscription;
import com.netcracker.edu.backend.repository.SubscriptionRepository;
import com.netcracker.edu.backend.service.BillingAccountService;
import com.netcracker.edu.backend.service.SubscriptionService;
import com.netcracker.edu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public Subscription changeSubscriptionStatus(Subscription subscription) {
        Subscription sub = repository.findById(subscription.getId()).get();
        String status;

        if(subscription.isActive()) {
            status = "Active";
        }
        else {
            status = "Blocked";
        }

        switch (status) {
            case "Active":
                sub.play(subscription.isActive());
                break;
            case "Blocked":
                sub.block(subscription.isActive());
                break;
            default:
                break;
        }
        return repository.save(sub);
    }

    @Override
    public Iterable<Subscription> findExpiringSubscription(boolean isActive) {
        return repository.findFirstByExpiredTime(isActive);
    }

    @Override
    public Subscription updateSubscription(Subscription subscription) {
        return repository.save(subscription);
    }

    @Override
    public Subscription findByUserIdAndService(Long user_id, com.netcracker.edu.backend.entity.Service service) {
        return repository.findByUserIdAndService(user_id, service);
    }
}
