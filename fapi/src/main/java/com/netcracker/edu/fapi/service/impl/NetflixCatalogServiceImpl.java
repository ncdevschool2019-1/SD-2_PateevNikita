package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.NetflixCatalogViewModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netcracker.edu.fapi.service.NetflixCatalogService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class NetflixCatalogServiceImpl implements NetflixCatalogService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<NetflixCatalogViewModel> getNetflixCatalog() {
        RestTemplate restTemplate = new RestTemplate();
        NetflixCatalogViewModel[] netflixCatalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/netflix/", NetflixCatalogViewModel[].class);
        return netflixCatalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(netflixCatalogViewModelsResponse);
    }
}
