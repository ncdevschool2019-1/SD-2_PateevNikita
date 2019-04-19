package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NetflixCatalogViewModel {

    private long id;
    private String type;
    private String serviceName;
    private double cost;
    private int date;

    public NetflixCatalogViewModel() {}

    public NetflixCatalogViewModel(long id, String type, String serviceName, double cost, int date) {
        this.id = id;
        this.type = type;
        this.serviceName = serviceName;
        this.cost = cost;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NetflixCatalogViewModel that = (NetflixCatalogViewModel) o;
        return getId() == that.getId() &&
                Double.compare(that.getCost(), getCost()) == 0 &&
                getDate() == that.getDate() &&
                Objects.equals(getType(), that.getType()) &&
                Objects.equals(getServiceName(), that.getServiceName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getType(), getServiceName(), getCost(), getDate());
    }

    @Override
    public String toString() {
        return "NetflixCatalogViewModel{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", serviceName='" + serviceName + '\'' +
                ", cost=" + cost +
                ", date=" + date +
                '}';
    }
}
