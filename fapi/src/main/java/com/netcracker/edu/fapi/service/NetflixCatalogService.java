package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.NetflixCatalogViewModel;
import java.util.List;

public interface NetflixCatalogService {
    List<NetflixCatalogViewModel> getNetflixCatalog();
}
