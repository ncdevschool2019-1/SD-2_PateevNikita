package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "subscriptions")
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long duration;

    @Column(name = "Is_Active")
    private boolean isActive;

    @Column(name = "start_time")
    private long startTime;

    @Column(name = "expired_time")
    private long expiredTime;

    @Column(name = "UserId")
    private long userId;

    @ManyToOne(cascade = {CascadeType.MERGE})
    @JoinColumn(name = "ServiceId")
    private Service service;

    public Subscription() {}

    public Subscription(long duration, boolean isActive, long startTime, long expiredTime, long userId, Service service) {
        this.duration = duration;
        this.isActive = isActive;
        this.startTime = startTime;
        this.expiredTime = expiredTime;
        this.userId = userId;
        this.service = service;
    }

    public Subscription(long duration, boolean isActive, long userId, Service service) {
        this.duration = duration;
        this.isActive = isActive;
        this.userId = userId;
        this.service = service;
        this.startTime = (new Date()).getTime();
        this.expiredTime = this.startTime + duration;
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

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getExpiredTime() {
        return expiredTime;
    }

    public void setExpiredTime(long expiredTime) {
        this.expiredTime = expiredTime;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public long getDuration() {
        return duration;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Subscription that = (Subscription) o;
        return getId() == that.getId() &&
                isActive() == that.isActive() &&
                getStartTime() == that.getStartTime() &&
                getExpiredTime() == that.getExpiredTime() &&
                getUserId() == that.getUserId() &&
                Objects.equals(getService(), that.getService());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), isActive(), getStartTime(), getExpiredTime(), getUserId(), getService());
    }

    @Override
    public String toString() {
        return "Subscription{" +
                "id=" + id +
                ", isActive=" + isActive +
                ", startTime=" + startTime +
                ", expiredTime=" + expiredTime +
                ", userId=" + userId +
                ", service=" + service +
                '}';
    }

    public void reload() {
        this.startTime = (new Date()).getTime();
        this.expiredTime = this.startTime + this.duration;
        this.setActive(true);
    }
}
