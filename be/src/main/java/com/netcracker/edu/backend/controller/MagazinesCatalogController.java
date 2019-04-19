/*package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/catalog/magazines")
public class MagazinesCatalogController {

    @Autowired
    private MagazinesCatalogService magazinesCatalogService;



    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Service> getAllMagazinesCatalogByType() {
        return magazinesCatalogService.getAllMagazinesCatalogByType();
    }
}
*/