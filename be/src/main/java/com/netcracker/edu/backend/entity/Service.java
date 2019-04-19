package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double cost;
    private String serviceName;
    private String type;

    @ManyToOne
    @JoinColumn(name = "serviceTypeId")
    private ServiceType serviceType;

    public Service() {}



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Service(double cost, String serviceName, String type, ServiceType serviceType) {
        this.cost = cost;
        this.serviceName = serviceName;
        this.type = type;
        this.serviceType = serviceType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Service service = (Service) o;
        return getId() == service.getId() &&
                Double.compare(service.getCost(), getCost()) == 0 &&
                Objects.equals(getServiceName(), service.getServiceName()) &&
                Objects.equals(getType(), service.getType()) &&
                Objects.equals(getServiceType(), service.getServiceType());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getCost(), getServiceName(), getType(), getServiceType());
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", cost=" + cost +
                ", serviceName='" + serviceName + '\'' +
                ", type='" + type + '\'' +
                ", serviceType=" + serviceType +
                '}';
    }
}
