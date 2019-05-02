import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../../../services/user.service";
import {BillingAccount} from "../../models/billing-account";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  users: User[] = [];

  constructor(private userService: UserService) { }

  getAllUsers(): void {
    this.subscriptions.push(this.userService.getAllUsers().subscribe(user => this.users = user as User[]));
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
