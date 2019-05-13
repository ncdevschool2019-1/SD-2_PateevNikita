package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.CatalogViewModel;

import java.util.List;

public interface MagazinesCatalogService {
    List<CatalogViewModel> getMagazinesCatalog();
    List<CatalogViewModel> getMagazinesCatalog(String page);
    Integer getNumberOfPages();
}
