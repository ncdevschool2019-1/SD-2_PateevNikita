package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.BillingAccountViewModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netcracker.edu.fapi.service.BillingAccountService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class BillingAccountServiceImpl implements BillingAccountService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<BillingAccountViewModel> getBillingAccounts() {
        RestTemplate restTemplate = new RestTemplate();
        BillingAccountViewModel[] billingAccountViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/billing-accounts", BillingAccountViewModel[].class);
        return billingAccountViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(billingAccountViewModelsResponse);
    }

    @Override
    public List<BillingAccountViewModel> getBillingAccountsByUserId(String id) {
        RestTemplate restTemplate = new RestTemplate();
        BillingAccountViewModel[] billingAccountViewModelResponse = restTemplate.getForObject(backendServerUrl + "api/billing-accounts/" + id, BillingAccountViewModel[].class);
        return billingAccountViewModelResponse == null ? Collections.emptyList() : Arrays.asList(billingAccountViewModelResponse);
    }

    @Override
    public void deleteBillingAccount(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "api/billing-accounts/" + id);
    }

    @Override
    public BillingAccountViewModel addBillingAccount(BillingAccountViewModel account) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "api/billing-accounts", account, BillingAccountViewModel.class).getBody();
    }

    @Override
    public void addMoney(BillingAccountViewModel account, Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.put(backendServerUrl + "api/billing-accounts/" + id, account, BillingAccountViewModel.class);
    }
}
