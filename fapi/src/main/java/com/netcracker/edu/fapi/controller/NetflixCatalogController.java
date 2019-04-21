package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.CatalogViewModel;
import com.netcracker.edu.fapi.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalog/netflix")
public class NetflixCatalogController {

    @Autowired
    private NetflixCatalogService netflixCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CatalogViewModel>> getNetflixCatalog() {
        return ResponseEntity.ok(netflixCatalogService.getNetflixCatalog());
    }
}
