package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MusicCatalogViewModel {

    private int id;
    private String type;
    private double cost;
    private String date;

    public MusicCatalogViewModel() {
        id = 1;
        type = "music";
        cost = 2.28;
        date = "for 6 month";
    }

    public MusicCatalogViewModel(int id, String type, double cost, String date)
    {
        this.id = id;
        this.type = type;
        this.cost = cost;
        this.date = date;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
