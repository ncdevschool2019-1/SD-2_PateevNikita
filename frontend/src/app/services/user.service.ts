import { Injectable } from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {User} from "../modules/account/models/user";
import {HttpClient} from "@angular/common/http";
import {RegUser} from "../modules/authorization/models/RegUser";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private activeUser: User;
  subscription: Subscription;

  constructor(private http: HttpClient, private authService: AuthorizationService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/api/users');
  }

  addUser(acc: RegUser): Observable<User> {
    return this.http.post<User>('http://localhost:8081/api/users', acc);
  }

  public getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>('http://localhost:8081/api/users' + '/username/' + username);
  }

  changeUserRole(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8081/api/users', user);
  }

  setActiveUser(user: User) {
    this.activeUser = user;
  }

  getActiveUser(): User {
    if (this.isAdmin()) {
    return this.activeUser;
    } else return this.authService.getAuthorizedUser();

  }

  private isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() !== null;
  }

  private isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "User";
  }

  private isAdmin(): boolean {
    if (!this.isAuthorized()) return false;
    return this.authService.getAuthorizedUser().role.name === "Admin";
  }
}


