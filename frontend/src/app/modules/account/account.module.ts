import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BillingAccountComponent} from "./components/billing-account/billing-account.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UserSubscriptionsComponent} from "./components/user-subscriptions/user-subscriptions.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BillingAccountComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    UsersListComponent,
    AdminComponent
  ],
  declarations: [
    BillingAccountComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    UsersListComponent,
    AdminComponent
  ]
})
export class AccountModule { }
