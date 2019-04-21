package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CatalogViewModel {
    private long id;
    private String serviceName;
    private double cost;
    private int date;

    public CatalogViewModel() {
    }

    public CatalogViewModel(long id, String serviceName, double cost, int date) {
        this.id = id;
        this.serviceName = serviceName;
        this.cost = cost;
        this.date = date;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CatalogViewModel that = (CatalogViewModel) o;
        return getId() == that.getId() &&
                Double.compare(that.getCost(), getCost()) == 0 &&
                getDate() == that.getDate() &&
                Objects.equals(getServiceName(), that.getServiceName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getServiceName(), getCost(), getDate());
    }

    @Override
    public String toString() {
        return "CatalogViewModel{" +
                "id=" + id +
                ", serviceName='" + serviceName + '\'' +
                ", cost=" + cost +
                ", date=" + date +
                '}';
    }
}
