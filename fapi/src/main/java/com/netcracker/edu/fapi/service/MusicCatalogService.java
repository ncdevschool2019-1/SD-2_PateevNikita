package com.netcracker.edu.fapi.service;

import com.netcracker.edu.fapi.models.MusicCatalogViewModel;
import java.util.List;

public interface MusicCatalogService {
    List<MusicCatalogViewModel> getMusicCatalog();
}
