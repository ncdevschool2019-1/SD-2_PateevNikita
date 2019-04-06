import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthorizationComponent} from "./components/authorization/authorization.component";

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AuthorizationComponent
  ],
  declarations: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
