package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.CatalogViewModel;

import java.util.List;

public interface MusicCatalogService {
    List<CatalogViewModel> getMusicCatalog();
    List<CatalogViewModel> getMusicCatalog(String page);
    Integer getNumberOfPages();
}
