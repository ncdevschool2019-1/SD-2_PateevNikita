/*package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/catalog")
public class NetflixCatalogController {

    @Autowired
    private NetflixCatalogService netflixCatalogService;

    @Autowired
    private CatalogRepository catalogRepository;

    @Autowired
    public MusicCatalogController(MusicCatalogService musicCatalogService) {
        this.musicCatalogService = musicCatalogService;
    }

    @RequestMapping(value = "/{type}" ,method = RequestMethod.GET)
    public Iterable<Service> getAllNetflixCatalog(@PathVariable String type) {
        return netflixCatalogService.getAllNetflixCatalog(type);
    }
}*/
