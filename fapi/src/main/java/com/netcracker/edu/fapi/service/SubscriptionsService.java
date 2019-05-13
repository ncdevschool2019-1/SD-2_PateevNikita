package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.SubscriptionViewModel;

import java.util.List;

public interface SubscriptionsService {
    List<SubscriptionViewModel> getSubscriptionsByUserId(Long userId);
    SubscriptionViewModel addSubscription(SubscriptionViewModel subscriptionViewModel);
    void deleteSubscription(Long id);
    void changeSubscriptionStatus(SubscriptionViewModel subscriptionViewModel);
}
