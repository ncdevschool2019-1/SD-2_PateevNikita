package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.repository.CatalogRepository;
import com.netcracker.edu.backend.service.NetflixCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/catalog/netflix")
public class NetflixCatalogController {

    @Autowired
    private NetflixCatalogService netflixCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Service> getAllNetflixCatalogByType() {
        return netflixCatalogService.getAllNetflixCatalogByType();
    }

    @RequestMapping(value = "/{page}", method = RequestMethod.GET)
    public Iterable<Service> getPage(@PathVariable(name = "page") String page) {
        return netflixCatalogService.getAllNetflixCatalog(page);
    }

    @RequestMapping(value = "/pages", method = RequestMethod.GET)
    public Integer getNumberOfPages() {
        return netflixCatalogService.getNumberOfServices();
    }
}
