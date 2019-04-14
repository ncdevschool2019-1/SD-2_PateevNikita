package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.MusicCatalogViewModel;
import com.netcracker.edu.fapi.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/music")
public class MusicCatalogController {

    @Autowired
    private MusicCatalogService musicCatalogService;

    @RequestMapping
    public ResponseEntity<List<MusicCatalogViewModel>> getMusicCatalog() {
        return ResponseEntity.ok(musicCatalogService.getMusicCatalog());
    }
}
