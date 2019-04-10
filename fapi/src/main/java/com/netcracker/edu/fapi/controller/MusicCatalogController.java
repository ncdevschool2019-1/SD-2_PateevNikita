package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.MusicCatalogViewModel;
import com.netcracker.edu.fapi.service.MusicCatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/music")
public class MusicCatalogController {

    @Autowired
    private MusicCatalogService musicCatalogService;

    @RequestMapping(value = "/{type}", method = RequestMethod.GET)
    public List<MusicCatalogViewModel> getMusicCatalog(@PathVariable String type) {
        List<MusicCatalogViewModel> list = new ArrayList<>();
        list.add(new MusicCatalogViewModel());
        return list;
    }
}
