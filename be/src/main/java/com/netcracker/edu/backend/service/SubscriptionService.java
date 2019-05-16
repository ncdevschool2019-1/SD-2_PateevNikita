package com.netcracker.edu.backend.service;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.entity.Subscription;

public interface SubscriptionService {

    Iterable<Subscription> getSubscriptionsByUserId(Long user_id);
    Subscription addSubscription(Subscription subscription);
    void deleteSubscription(Long id);
    Subscription findByUserIdAndService(Long user_id, Service service);
}
