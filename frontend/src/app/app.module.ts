import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxHmCarouselModule } from "ngx-hm-carousel";

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";
import { HeaderComponent } from './modules/header/components/header/header.component';
import { AuthorizationComponent } from './modules/authorization/components/authorization/authorization.component';
import { UsersListComponent } from './modules/account/components/users-list/users-list.component';
import { SubscriptionsComponent } from './modules/account/components/subscriptions/subscriptions.component';
import { UserInfoComponent } from './modules/account/components/user-info/user-info.component';
import { BillingAccountComponent } from './modules/account/components/billing-account/billing-account.component';
import { UserSubscriptionsComponent } from './modules/account/components/user-subscriptions/user-subscriptions.component';
import { BalanceComponent } from './modules/account/components/balance/balance.component';
import { MusicCatalogComponent } from './modules/catalog/components/music-catalog/music-catalog.component';
import { MagazinesCatalogComponent } from './modules/catalog/components/magazines-catalog/magazines-catalog.component';
import { NetflixCatalogComponent } from './modules/catalog/components/netflix-catalog/netflix-catalog.component';
import { CarouselComponent } from './modules/landing/components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
    UsersListComponent,
    SubscriptionsComponent,
    UserInfoComponent,
    BillingAccountComponent,
    UserSubscriptionsComponent,
    BalanceComponent,
    MusicCatalogComponent,
    MagazinesCatalogComponent,
    NetflixCatalogComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxHmCarouselModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
