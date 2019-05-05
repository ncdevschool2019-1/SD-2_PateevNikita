import { Injectable } from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {BillingAccount} from "../modules/account/models/billing-account";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BillingAccountService {

  billingAccounts: BillingAccount[] = [];
  subscription: Subscription;

  constructor(private http: HttpClient) { }

  getBillingAccounts(): Observable<BillingAccount[]> {
    return this.http.get<BillingAccount[]>('http://localhost:8081/api/billing-accounts');
  }

  deleteBillingAccount(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8081/api/billing-accounts/' + id)
  }

  addBillingAccount(acc: BillingAccount): Observable<BillingAccount> {
    return this.http.post<BillingAccount>('http://localhost:8081/api/billing-accounts', acc);
  }

  addMoney(acc: BillingAccount): Observable<BillingAccount> {
    return this.http.put<BillingAccount>('http://localhost:8081/api/billing-accounts/' + acc.id, acc);
  }
}