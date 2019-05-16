import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthorizationService} from "../../../../services/authorization.service";
import {ToastrService} from "ngx-toastr";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Subscriptions} from "../../models/subscriptions";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {BillingAccountService} from "../../../../services/billing-account.service";

@Component({
  selector: 'app-user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.css']
})
export class UserSubscriptionsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  subs: Subscriptions[] = [];
  clearIntervalInstance: any;

  constructor(private authService: AuthorizationService, private toastr: ToastrService,
              private subsService: SubscriptionService, private spinner: Ng4LoadingSpinnerService) { }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(subs => {this.subs = subs as Subscriptions[];
    }));
  }

  updateSubscriptions(): void {
    this.getSubscriptions();
  }

  deleteSubscription(id: number): void {
    this.toastr.clear();
    this.spinner.show();
    this.subscriptions.push(
      this.subsService.deleteSubscription(id).subscribe(() => {
        this.updateSubscriptions();
        this.spinner.hide();
      }));
    this.toastr.success("Your subscription has been successfully deleted");
  }

  changeSubscriptionsStatus(subId: number, isActive: boolean): void {
     this.subs.forEach(value => {
       if(value.id == subId) {
         this.subscriptions.push(
           this.subsService.changeSubscriptionStatus(new Subscriptions(value.id, value.expiredTime, value.userId, isActive, value.startTime, value.service))
             .subscribe(() => {
               this.updateSubscriptions();
             }));
       }
     });
  }

  isActive(id: boolean): string {
    if(id) {
      return "Active";
    }
    else return "Blocked";
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  setTime(seconds: number): Date {
    let date = new Date(seconds);
    return date;
  }

  ngOnInit(): void {
    this.clearIntervalInstance =
      setTimeout(() => {
        this.getSubscriptions();
      }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }

}
