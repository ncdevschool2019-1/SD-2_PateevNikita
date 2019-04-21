package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.MagazinesCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalog/magazines")
public class MagazinesCatalogController {

    @Autowired
    private MagazinesCatalogService magazinesCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CatalogViewModel>> getMagazinesCatalog() {
        return ResponseEntity.ok(magazinesCatalogService.getMagazinesCatalog());
    }
}
