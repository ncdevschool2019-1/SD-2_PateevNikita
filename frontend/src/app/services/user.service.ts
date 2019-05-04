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

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/api/users');
  }

  addUser(acc: User): Observable<User> {
    return this.http.post<User>('http://localhost:8081/api/users', acc);
  }

  /*setActiveUser(user: User) {
    this.activeUser = user;
  }

  getActiveUser(): User {
    if (this.isAdmin()) {
    return this.activeUser;
    } else return this.authService.getAuthorizedUser();

  }*/
}


