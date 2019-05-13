package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SubscriptionViewModel {
    private Long id;
    private Long userId;
    private Long expiredTime;
    private Long startTime;
    private boolean isActive;
    private Service service;

    public SubscriptionViewModel(){}

    public SubscriptionViewModel(Long id, Long userId, Long expiredTime, Long startTime, boolean isActive, Service service) {
        this.id = id;
        this.userId = userId;
        this.expiredTime = expiredTime;
        this.startTime = startTime;
        this.isActive = isActive;
        this.service = service;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getExpiredTime() {
        return expiredTime;
    }

    public void setExpiredTime(Long expiredTime) {
        this.expiredTime = expiredTime;
    }

    public Long getStartTime() {
        return startTime;
    }

    public void setStartTime(Long startTime) {
        this.startTime = startTime;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
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
        SubscriptionViewModel that = (SubscriptionViewModel) o;
        return isActive() == that.isActive() &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getUserId(), that.getUserId()) &&
                Objects.equals(getExpiredTime(), that.getExpiredTime()) &&
                Objects.equals(getStartTime(), that.getStartTime()) &&
                Objects.equals(getService(), that.getService());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserId(), getExpiredTime(), getStartTime(), isActive(), getService());
    }

    @Override
    public String toString() {
        return "SubscriptionViewModel{" +
                "id=" + id +
                ", userId=" + userId +
                ", expiredTime=" + expiredTime +
                ", startTime=" + startTime +
                ", isActive=" + isActive +
                ", service=" + service +
                '}';
    }
}
