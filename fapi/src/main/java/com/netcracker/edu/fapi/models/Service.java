package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Service {
    private long id;
    private String serviceName;
    private double cost;
    private int date;

    public Service() {}

    public Service(long id, String serviceName, double cost, int date) {
        this.id = id;
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
        Service service = (Service) o;
        return getId() == service.getId() &&
                Double.compare(service.getCost(), getCost()) == 0 &&
                getDate() == service.getDate() &&
                Objects.equals(getServiceName(), service.getServiceName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getServiceName(), getCost(), getDate());
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", serviceName='" + serviceName + '\'' +
                ", cost=" + cost +
                ", date=" + date +
                '}';
    }
}
