import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../account/models/user";
import {AuthorizationService} from "../../../../services/authorization.service";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private authService: AuthorizationService,
              private spinner: NgxSpinnerService) { }

  headerUserName(): string {
    return this.authService.getAuthorizedUser().userName;
  }

  isAuthorized(): boolean {
    return this.authService.getAuthorizedUser() !== null;
  }

  isUser(): boolean {
    return this.authService.isUser();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  signOut() {
    this.spinner.show();
    this.authService.leaveAccount();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  ngOnInit() {
  }


}
