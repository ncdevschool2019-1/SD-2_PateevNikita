package com.netcracker.edu.backend.controller;

import com.netcracker.edu.backend.entity.Service;
import com.netcracker.edu.backend.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/catalog/music")
public class MusicCatalogController {

    @Autowired
    private MusicCatalogService musicCatalogService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Service> getAllMusicCatalogByType() {
        return musicCatalogService.getAllMusicCatalogByType();
    }

    @RequestMapping(value = "/{page}", method = RequestMethod.GET)
    public Iterable<Service> getPage(@PathVariable(name = "page") String page) {
        return musicCatalogService.getAllMusicCatalog(page);
    }

    @RequestMapping(value = "/pages", method = RequestMethod.GET)
    public Integer getNumberOfPages() {
        return musicCatalogService.getNumberOfServices();
    }
}
