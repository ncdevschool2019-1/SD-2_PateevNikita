import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BillingAccountComponent} from "./components/billing-account/billing-account.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UserSubscriptionsComponent} from "./components/user-subscriptions/user-subscriptions.component";
import { AdminComponent } from './components/admin/admin.component';
import {YandexComponent} from "./components/yandex/yandex.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { AdminSubsComponent } from './components/admin-subs/admin-subs.component';
import {PaginationModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width'
    })
  ],
  exports: [
    BillingAccountComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    AdminComponent,
    YandexComponent,
    AdminSubsComponent
  ],
  declarations: [
    BillingAccountComponent,
    UserInfoComponent,
    UserSubscriptionsComponent,
    AdminComponent,
    YandexComponent,
    AdminSubsComponent
  ]
})
export class AccountModule { }
