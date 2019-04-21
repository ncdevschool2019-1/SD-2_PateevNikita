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
    return this.http.get<BillingAccount[]>('http://localhost:8081/api/account/billing');
  }

  updateBillingAccounts() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.http.get<BillingAccount[]>('http://localhost:8081/api/account/billing')
      .subscribe(billingAccounts => this.billingAccounts = billingAccounts);
  }

  deleteBillingAccount(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8081/api/account/billing/' + id)
  }

  addBillingAccount(acc: BillingAccount): Observable<BillingAccount> {
    return this.http.post<BillingAccount>('http://localhost:8081/api/account/billing', acc);
  }
}
