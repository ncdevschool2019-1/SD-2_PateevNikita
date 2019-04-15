package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/magazines")
public class MagazinesCatalogController {

    private MagazinesCatalogService magazinesCatalogService;

    @Autowired
    public MagazinesCatalogController(MagazinesCatalogService magazinesCatalogService) {
        this.magazinesCatalogService = magazinesCatalogService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Service> getAllMagazinesCatalog() {
        return magazinesCatalogService.getAllMagazinesCatalog();
    }
}
