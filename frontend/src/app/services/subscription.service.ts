import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, Subscription} from 'rxjs';
import {UserService} from "./user.service";
import {Catalog} from "../modules/catalog/models/catalog";
import {Subscriptions} from "../modules/account/models/subscriptions";
import {AuthorizationService} from "./authorization.service";
import {BillingAccount} from "../modules/account/models/billing-account";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscription: Subscription;

  private subscriptions: Subscriptions[] = [];

  constructor(private http: HttpClient, private userService: UserService,
              private authService: AuthorizationService) { }


  getSubscriptions(): Observable<Subscriptions[]> {
    return this.http.get<Subscriptions[]>('http://localhost:8081/api/subscriptions/' + this.authService.getAuthorizedUser().id);
  }

  deleteSubscription(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8081/api/subscriptions/' + id)
  }

  addSubscription(acc: Subscriptions): Observable<Subscriptions> {
    return this.http.post<Subscriptions>('http://localhost:8081/api/subscriptions', acc);
  }

  changeSubscriptionStatus(subscription: Subscriptions): Observable<Subscriptions> {
    return this.http.put<Subscriptions>('http://localhost:8081/api/subscriptions', subscription);
  }
}
