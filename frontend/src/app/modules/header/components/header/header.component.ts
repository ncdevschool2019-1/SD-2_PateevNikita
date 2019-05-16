import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../account/models/user";
import {AuthorizationService} from "../../../../services/authorization.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Subscriptions} from "../../../account/models/subscriptions";
import {Subscription} from "rxjs";
import {SubscriptionService} from "../../../../services/subscription.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

  user: User;
  subs: Subscriptions[] = [];
  subscriptions: Subscription[] = [];
  clearIntervalInstance: any;
  flag: boolean = false;

  constructor(private userService: UserService, private authService: AuthorizationService,
              private spinner: NgxSpinnerService, private subsService: SubscriptionService) { }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(data => {
      this.subs = data;
    }))
  }

  isThereYandex(): boolean {
    this.subs.forEach(value => {
      if(value.service.serviceName == "Yandex" && value.active == true){
        this.flag = true;
      }
    });
    return this.flag;
  }

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
    this.clearIntervalInstance =
      setInterval(() => {
        if (this.isUser()) {
          this.getSubscriptions();
        }
      }, 1000);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }

}
