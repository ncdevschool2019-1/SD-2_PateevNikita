package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import org.springframework.beans.factory.annotation.Value;
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
    public List<CatalogViewModel> getNetflixCatalog() {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/netflix", CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }
}