import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BillingAccountsComponent } from './billing-accounts/billing-accounts.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import { HeaderComponent } from './modules/header/components/header/header.component';
import { AuthorizationComponent } from './modules/authorization/components/authorization/authorization.component';
import { CarouselComponent } from './modules/carousel/components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    BillingAccountsComponent,
    HeaderComponent,
    AuthorizationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
