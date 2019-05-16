import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as $ from 'jquery';
import {RegUser} from "../../models/RegUser";
import {LogUser} from "../../models/LogUser";
import { NgxSpinnerService } from 'ngx-spinner';
import {AuthorizationService} from "../../../../services/authorization.service";
import {TokenService} from "../../../../services/token.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  addUserForm: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required,Validators.maxLength(15)]),
    firstName: new FormControl("", [Validators.required, Validators.maxLength(20),
    Validators.pattern('[a-zA-Z-]*')]),
    lastName: new FormControl("", [Validators.required, Validators.required, Validators.maxLength(25),
      Validators.pattern('[a-zA-Z-]*')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    userPassword: new FormControl("", [Validators.required, Validators.maxLength(20),
      Validators.minLength(7), Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$')])
  });

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required, Validators.maxLength(15)]),
    userPassword: new FormControl("", [Validators.required, Validators.maxLength(20),
      Validators.minLength(7)])
  });

  constructor(private userService: UserService, private authService: AuthorizationService,
              private tokenService: TokenService, private spinner: NgxSpinnerService,
              private toastr: ToastrService) {
  }

  updateSignUpForm(): void {
    this.addUserForm = new FormGroup({
      userName: new FormControl("", [Validators.required,Validators.maxLength(15)]),
      firstName: new FormControl("", [Validators.required, Validators.maxLength(20),
        Validators.pattern('[a-zA-Z-]*')]),
      lastName: new FormControl("", [Validators.required, Validators.required, Validators.maxLength(25),
        Validators.pattern('[a-zA-Z-]*')]),
      email: new FormControl("", [Validators.required, Validators.email]),
      userPassword: new FormControl("", [Validators.required, Validators.maxLength(20),
        Validators.minLength(7), Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$')])
    });
  }

  showPassword(input: any): any {
    input.type = (input.type === 'password' ? 'text' : 'password');
  }

  registration() {
    $( document ).ready(function() {
      $('.message a').click(function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.main').animate({height: '70%'}, "slow");
        $('.show-pass_').animate({opacity: "1"}, "slow");
      });
      $('.create a').click(function () {
        $('.show-pass_').animate({opacity: "0"}, "slow");
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        $('.main').animate({height: '100%'}, "slow");
      });
    });
  }

  regUser(): void {
    let user = new RegUser(this.addUserForm.get("firstName").value, this.addUserForm.get("lastName").value, this.addUserForm.get("userName").value,
      this.addUserForm.get("email").value, this.addUserForm.get("userPassword").value);

    this.subscriptions.push(this.userService.addUser(user).subscribe(() => {
    }, () => {
      this.toastr.clear();
        this.toastr.error("Such Username or E-Mail already exists!", 'Error');
      }, () => {
      $( document ).ready(function() {
          $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
          $('.main').animate({height: '70%'}, "slow");
        });
      this.updateSignUpForm();
      this.toastr.success("Account was successfully created! Now you can sign in");
    }));
  }

  loginUser() {
    let user = new LogUser(this.loginForm.get("userName").value, this.loginForm.get("userPassword").value);

    console.log(this.authService.getAuthorizedUser());

    this.spinner.show();

    this.subscriptions.push(this.authService.attemptAuthorize(user).subscribe(data => {
      this.tokenService.saveToken(data.token);
      this.tokenService.saveLogin(data.login);
      this.tokenService.saveAuthorities(data.role);
      console.log(data.token, data.role);
      }, () => {
      this.spinner.hide();
      this.toastr.clear();
      this.toastr.error("You are not registered!", 'Error');
      }, () => {
        this.subscriptions.push(this.userService.getUserByUsername(this.tokenService.getLogin()).subscribe(data => {
          this.authService.setAuthorizedUser(data);

          if(data.role.name === "User") {
            this.toastr.success('Hello, ' + data.firstName + '!', 'Success!');
            this.toastr.info("Now you can use all features of our service");
          }
          else {
            this.toastr.success('Hello, Admin!', 'Success!');
          }

          setTimeout(() => {
            window.location.replace('http://localhost:4800/home');
            this.spinner.hide();
          }, 2000);
        }));
      }));
  }

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  ngOnInit() {
    this.registration();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
