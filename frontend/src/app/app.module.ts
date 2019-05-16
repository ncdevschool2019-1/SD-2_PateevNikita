import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxHmCarouselModule } from "ngx-hm-carousel";
import {APP_BASE_HREF} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ToastrModule} from "ngx-toastr";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";
import { AppRoutingModule } from './/app-routing.module';
import { AccountModule } from './modules/account/account.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { HeaderModule } from './modules/header/header.module';
import { LandingModule } from './modules/landing/landing.module';
import { LayoutModule } from './modules/layout/layout.module';
import {httpInterceptorProviders} from "./services/interceptor.service";
import {PaginationModule} from "ngx-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxHmCarouselModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    AccountModule,
    AuthorizationModule,
    CatalogModule,
    HeaderModule,
    LandingModule,
    LayoutModule,
    NgxSpinnerModule,
    PaginationModule,
    NgxPaginationModule,
    TooltipModule
],
  providers: [{provide: APP_BASE_HREF, useValue : '/'}, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
