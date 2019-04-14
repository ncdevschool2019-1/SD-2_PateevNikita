package com.netcracker.edu.backend.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "billingaccounts")
public class BillingAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double balance;

    @Column(name = "paymentMethod")
    private String payment_method;

    private int userId;


    public BillingAccount() { }

    public BillingAccount(double balance, String payment_method, int userId) {
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BillingAccount that = (BillingAccount) o;
        return getId() == that.getId() &&
                Objects.equals(getBalance(), that.getBalance()) &&
                Objects.equals(getPayment_method(), that.getPayment_method());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getBalance(), getPayment_method());
    }

    @Override
    public String toString() {
        return "BillingAccount{" +
            "id=" + id +
            ", balance='" + balance + '\'' +
            ", payment_method='" + payment_method + '\'' +
                ", userId='" + userId + '\'' +
            '}';
    }
}
