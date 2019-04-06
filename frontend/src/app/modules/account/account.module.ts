import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BalanceComponent} from "./components/balance/balance.component";
import {BillingAccountComponent} from "./components/billing-account/billing-account.component";
import {SubscriptionsComponent} from "./components/subscriptions/subscriptions.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UserSubscriptionsComponent} from "./components/user-subscriptions/user-subscriptions.component";
import {UsersListComponent} from "./components/users-list/users-list.component";

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BalanceComponent,
    BillingAccountComponent,
    SubscriptionsComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    UsersListComponent
  ],
  declarations: [
    BalanceComponent,
    BillingAccountComponent,
    SubscriptionsComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    UsersListComponent
  ]
})
export class AccountModule { }
