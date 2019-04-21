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
        BillingAccountViewModel[] billingAccountViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/account/billing", BillingAccountViewModel[].class);
        return billingAccountViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(billingAccountViewModelsResponse);
    }

    @Override
    public void deleteBillingAccount(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "api/account/billing/" + id);
    }

    @Override
    public BillingAccountViewModel addBillingAccount(BillingAccountViewModel account) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "api/account/billing", account, BillingAccountViewModel.class).getBody();
    }
}
