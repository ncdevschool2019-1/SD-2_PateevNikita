package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.MusicCatalogViewModel;
import com.netcracker.edu.fapi.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalog")
public class MusicCatalogController {

    @Autowired
    private MusicCatalogService musicCatalogService;

    @RequestMapping(value = "/{type}", method = RequestMethod.GET)
    public ResponseEntity<List<MusicCatalogViewModel>> getMusicCatalog(@PathVariable String type) {
        return ResponseEntity.ok(musicCatalogService.getMusicCatalog(type));
    }
}
