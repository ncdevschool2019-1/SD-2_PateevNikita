package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "is_active")
    private boolean isActive;

    private double price;
    private int startTime;
    private int expiredTime;
    private int userId;

    @ManyToOne
    @JoinColumn(name = "serviceId")
    private Service service;

    public Subscription() {}

    public Subscription(boolean isActive, double price, int startTime, int expiredTime, int userId, Service service) {
        this.isActive = isActive;
        this.price = price;
        this.startTime = startTime;
        this.expiredTime = expiredTime;
        this.userId = userId;
        this.service = service;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStartTime() {
        return startTime;
    }

    public void setStartTime(int startTime) {
        this.startTime = startTime;
    }

    public int getExpiredTime() {
        return expiredTime;
    }

    public void setExpiredTime(int expiredTime) {
        this.expiredTime = expiredTime;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subscription that = (Subscription) o;
        return getId() == that.getId() &&
                isActive() == that.isActive() &&
                Double.compare(that.getPrice(), getPrice()) == 0 &&
                getStartTime() == that.getStartTime() &&
                getExpiredTime() == that.getExpiredTime() &&
                getUserId() == that.getUserId() &&
                Objects.equals(getService(), that.getService());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), isActive(), getPrice(), getStartTime(), getExpiredTime(), getUserId(), getService());
    }

    @Override
    public String toString() {
        return "Subscription{" +
                "id=" + id +
                ", isActive=" + isActive +
                ", price=" + price +
                ", startTime=" + startTime +
                ", expiredTime=" + expiredTime +
                ", userId=" + userId +
                ", service=" + service +
                '}';
    }
}
