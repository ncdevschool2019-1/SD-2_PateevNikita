import { Injectable } from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {User} from "../modules/account/models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  subscription: Subscription;

  constructor(private http: HttpClient) { }

  addUser(acc: User): Observable<User> {
    return this.http.post<User>('http://localhost:8081/api/auth', acc);
  }
}


