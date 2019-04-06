import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {User} from "../modules/account/models/user";
import {HeaderService} from "./header.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {

  getUserInfo(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/api/account/' + this.headerService.getSelectedLink().name.toLowerCase());
  }

  constructor(private http: HttpClient, private headerService: HeaderService) {
  }
}
