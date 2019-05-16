import { Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {Subscriptions} from "../modules/account/models/subscriptions";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public id: number = 0;
  constructor(private http: HttpClient, private userService: UserService,
              private authService: AuthorizationService) {}

  getSubscriptions(): Observable<Subscriptions[]> {
    return this.http.get<Subscriptions[]>('http://localhost:8081/api/subscriptions/' + this.authService.getAuthorizedUser().id);
  }

  getSubscriptionsByUserId(): Observable<Subscriptions[]> {
    return this.http.get<Subscriptions[]>('http://localhost:8081/api/subscriptions/' + this.id);
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
