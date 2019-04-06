import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [

  ],
  declarations: [

  ]

})
export class LandingModule { }
