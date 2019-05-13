package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.netcracker.edu.fapi.service.MusicCatalogService;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class MusicCatalogServiceImpl implements MusicCatalogService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Override
    public List<CatalogViewModel> getMusicCatalog() {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/music", CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }

    @Override
    public List<CatalogViewModel> getMusicCatalog(String page) {
        RestTemplate restTemplate = new RestTemplate();
        CatalogViewModel[] catalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/catalog/music/" + page, CatalogViewModel[].class);
        return catalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(catalogViewModelsResponse);
    }

    @Override
    public Integer getNumberOfPages() {
        RestTemplate restTemplate = new RestTemplate();
        Integer res = restTemplate.getForObject(backendServerUrl + "api/catalog/music/pages", Integer.class);
        return res == null ? 0 : res;
    }
}
