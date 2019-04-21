package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netcracker.edu.fapi.service.MagazinesCatalogService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class MagazinesCatalogServiceImpl implements MagazinesCatalogService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<CatalogViewModel> getMagazinesCatalog() {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/magazines", CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }
}
