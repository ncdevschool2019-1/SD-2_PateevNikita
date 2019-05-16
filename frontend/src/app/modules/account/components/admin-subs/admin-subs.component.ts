import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Subscriptions} from "../../models/subscriptions";
import {AuthorizationService} from "../../../../services/authorization.service";
import {ToastrService} from "ngx-toastr";
import {SubscriptionService} from "../../../../services/subscription.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
  selector: 'app-admin-subs',
  templateUrl: './admin-subs.component.html',
  styleUrls: ['./admin-subs.component.css']
})
export class AdminSubsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  subs: Subscriptions[] = [];
  clearIntervalInstance: any;

  constructor(private authService: AuthorizationService, private toastr: ToastrService,
              private subsService: SubscriptionService, private spinner: Ng4LoadingSpinnerService) { }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptionsByUserId().subscribe(subs => this.subs = subs));
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
    this.toastr.success("This subscription has been successfully deleted");
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
      }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }


}
