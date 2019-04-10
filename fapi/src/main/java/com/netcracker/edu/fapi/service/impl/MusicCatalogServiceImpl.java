package com.netcracker.edu.fapi.service.impl;

import com.netcracker.edu.fapi.models.MusicCatalogViewModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
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
    public List<MusicCatalogViewModel> getMusicCatalog(String type) {
        RestTemplate restTemplate = new RestTemplate();
        MusicCatalogViewModel[] musicCatalogViewModelsResponse = restTemplate.getForObject(backendServerUrl + "api/music/" + type, MusicCatalogViewModel[].class);
        return musicCatalogViewModelsResponse == null ? Collections.emptyList() : Arrays.asList(musicCatalogViewModelsResponse);
    }
}
