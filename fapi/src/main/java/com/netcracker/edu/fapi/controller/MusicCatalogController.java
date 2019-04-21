package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalog/music")
public class MusicCatalogController {

    @Autowired
    private MusicCatalogService musicCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CatalogViewModel>> getMusicCatalog() {
        return ResponseEntity.ok(musicCatalogService.getMusicCatalog());
    }
}
