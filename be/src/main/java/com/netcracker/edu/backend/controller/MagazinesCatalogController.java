package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/catalog/magazines")
public class MagazinesCatalogController {

    @Autowired
    private MagazinesCatalogService magazinesCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Service> getAllMagazinesCatalogByType() {
        return magazinesCatalogService.getAllMagazinesCatalogByType();
    }

    @RequestMapping(value = "/{page}", method = RequestMethod.GET)
    public Iterable<Service> getPage(@PathVariable(name = "page") String page) {
        return magazinesCatalogService.getAllMagazinesCatalog(page);
    }

    @RequestMapping(value = "/pages", method = RequestMethod.GET)
    public Integer getNumberOfPages() {
        return magazinesCatalogService.getNumberOfServices();
    }
}
