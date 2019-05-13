import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../../../services/user.service";
import {BillingAccount} from "../../models/billing-account";
import {Subscriptions} from "../../models/subscriptions";
import {SubscriptionService} from "../../../../services/subscription.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  users: User[] = [];
  subs: Subscriptions[] = [];
  clearIntervalInstance: any;

  constructor(private userService: UserService, private subsService: SubscriptionService) { }

  getAllUsers(): void {
    this.subscriptions.push(this.userService.getAllUsers().subscribe(user => this.users = user as User[]));
  }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(subs => {this.subs = subs as Subscriptions[];
    }));
  }

  isActive(id: boolean): string {
    if(id) {
      return "Active";
    }
    else return "Blocked";
  }

  setTime(seconds: number): Date {
    let date = new Date(seconds);
    return date;
  }

  ngOnInit() {
    this.clearIntervalInstance =
      setTimeout(() => {
        this.getSubscriptions();
      }, 1000);
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
