import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from "../../../account/models/user";
import {UserService} from "../../../../services/user.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as $ from 'jquery';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  user: User[] = [];

  addUserForm: FormGroup = new FormGroup({
    userName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    userPassword: new FormControl("", Validators.required)
  });

  constructor(private userService: UserService) {
  }

  registration() {
    $( document ).ready(function() {
      $('.message a').click(function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.main').animate({height: '700px'}, "slow");
      });
      $('.create a').click(function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.main').animate({height: '900px'}, "slow");
      });
    });
  }

  submitUser(): void {
    this.subscriptions.push(this.userService.addUser(
      new User(null, this.addUserForm.get("firstName").value, this.addUserForm.get("lastName").value, this.addUserForm.get("userName").value,
        this.addUserForm.get("email").value, this.addUserForm.get("userPassword").value))
      .subscribe());
  }

  ngOnInit() {
    this.registration();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
