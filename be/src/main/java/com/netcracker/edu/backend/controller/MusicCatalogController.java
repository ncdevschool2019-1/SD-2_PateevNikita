package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/music")
public class MusicCatalogController {

    private MusicCatalogService musicCatalogService;

    @Autowired
    public MusicCatalogController(MusicCatalogService musicCatalogService) {
        this.musicCatalogService = musicCatalogService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Service> getAllMusicCatalog() {
        return musicCatalogService.getAllMusicCatalog();
    }
}
