package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/netflix")
public class NetflixCatalogController {

    private NetflixCatalogService netflixCatalogService;

    @Autowired
    public NetflixCatalogController(NetflixCatalogService netflixCatalogService) {
        this.netflixCatalogService = netflixCatalogService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Service> getAllNetflixCatalog() {
        return netflixCatalogService.getAllNetflixCatalog();
    }
}

