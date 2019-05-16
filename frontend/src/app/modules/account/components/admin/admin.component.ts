import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../models/user";
import {UserService} from "../../../../services/user.service";
import {Subscriptions} from "../../models/subscriptions";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Role} from "../../models/role";
import {AuthorizationService} from "../../../../services/authorization.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

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
  public flag: boolean = false;

  constructor(private userService: UserService, private subsService: SubscriptionService,
              private authService: AuthorizationService, private spinner: Ng4LoadingSpinnerService) { }

  getAllUsers(): void {
    this.subscriptions.push(this.userService.getAllUsers().subscribe(user => this.users = user as User[]));
  }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(subs => {this.subs = subs as Subscriptions[];
    }));
  }

  updateUsers(): void {
    this.getAllUsers();
  }

  changeRoleToAdmin(userId: number, role: Role): void {
    role.id = 1;
    role.name = "Admin";
    this.users.forEach(value => {
      if(value.id == userId) {
        this.subscriptions.push(
          this.userService.changeUserRole(new User(value.id, value.firstName, value.lastName, value.userName, value.email, value.userPassword, role))
            .subscribe(() => {
              this.updateUsers();
            }));
      }
    });
  }

  changeRoleToUser(userId: number, role: Role): void {
    role.id = 2;
    role.name = "User";
    this.users.forEach(value => {
      if(value.id == userId) {
        this.subscriptions.push(
          this.userService.changeUserRole(new User(value.id, value.firstName, value.lastName, value.userName, value.email, value.userPassword, role))
            .subscribe(() => {
              this.updateUsers();
            }));
       }
    });
  }

  checkUserSubscriptions(user_id: number) {
      this.subsService.id = user_id;
      console.log(this.subsService.id);
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isSuperAdmin(): boolean {
    if(this.authService.getAuthorizedUser().userName === "Admin") {
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
