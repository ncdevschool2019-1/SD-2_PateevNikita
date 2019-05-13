import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {TokenService} from "./services/token.service";
import {AuthorizationService} from "./services/authorization.service";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy{

      subscriptions: Subscription[] = [];

      constructor(private tokenService: TokenService, private authService: AuthorizationService,
                  private userService: UserService) {
      }

      ngOnInit(): void {
        if (this.tokenService.getLogin() != null) {
          this.subscriptions.push(
            this.userService.getUserByUsername(this.tokenService.getLogin()).subscribe(value => {
              if (value != null) {
                this.authService.setAuthorizedUser(value);
                console.log(this.authService.getAuthorizedUser().id);
              }
            })
          );
        }

      }

      ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
      }
}
