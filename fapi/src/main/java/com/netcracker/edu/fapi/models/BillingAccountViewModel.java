package com.netcracker.edu.fapi.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Objects;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BillingAccountViewModel {

    private long id;
    private double balance;
    private String payment_method;
    private long userId;


    public BillingAccountViewModel() {
    }

    public BillingAccountViewModel(long id, double balance, String payment_method, long userId) {
        this.id = id;
        this.balance = balance;
        this.payment_method = payment_method;
        this.userId = userId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BillingAccountViewModel that = (BillingAccountViewModel) o;
        return getId() == that.getId() &&
                Double.compare(that.getBalance(), getBalance()) == 0 &&
                getUserId() == that.getUserId() &&
                Objects.equals(getPayment_method(), that.getPayment_method());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBalance(), getPayment_method(), getUserId());
    }

    @Override
    public String toString() {
        return "BillingAccountViewModel{" +
                "id=" + id +
                ", balance=" + balance +
                ", payment_method='" + payment_method + '\'' +
                ", userId=" + userId +
                '}';
    }
}
