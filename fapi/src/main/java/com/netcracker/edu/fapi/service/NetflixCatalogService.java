package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.CatalogViewModel;

import java.util.List;

public interface NetflixCatalogService {
    List<CatalogViewModel> getNetflixCatalog();
    List<CatalogViewModel> getNetflixCatalog(String page);
    Integer getNumberOfPages();
}
