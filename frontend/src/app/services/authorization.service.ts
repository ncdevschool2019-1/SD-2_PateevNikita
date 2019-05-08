import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LogUser} from "../modules/authorization/models/LogUser";
import {AuthorizationToken} from "../modules/authorization/models/AuthorizationToken";
import {User} from "../modules/account/models/user";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private authorizedUser: User = null;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public setAuthorizedUser(user: User) {
    this.authorizedUser = user;
  }

  public getAuthorizedUser() {
    return this.authorizedUser;
  }

  attemptAuthorize(user: LogUser): Observable<AuthorizationToken> {
    return this.http.post<AuthorizationToken>('http://localhost:8081/api/auth' + '/signin', user);
  }

  public leaveAccount() {
    this.authorizedUser = null;
    this.tokenService.signOut();
  }

  isAuthorized(): boolean {
    return this.getAuthorizedUser() != null;
  }

  isUser(): boolean {
    if (!this.isAuthorized()) return false;
    return this.getAuthorizedUser().role.name === "User";
  }

  isAdmin(): boolean {
    if (!this.isAuthorized()) return false;
    return this.getAuthorizedUser().role.name === "Admin";
  }
}
