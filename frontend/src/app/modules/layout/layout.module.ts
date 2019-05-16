import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AccountModule} from "../account/account.module";
import {AuthorizationModule} from "../authorization/authorization.module";
import {CatalogModule} from "../catalog/catalog.module";
import {HeaderModule} from "../header/header.module";
import {LandingModule} from "../landing/landing.module";
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { MagazinesComponent } from './components/magazines/magazines.component';
import { NetflixComponent } from './components/netflix/netflix.component';
import { AuthComponent } from './components/auth/auth.component';
import { AccComponent } from './components/acc/acc.component';
import { UserSubsComponent } from './components/user-subs/user-subs.component';
import { UserBillAccsComponent } from './components/user-bill-accs/user-bill-accs.component';
import { UserInfComponent } from './components/user-inf/user-inf.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { PlayerComponent } from './components/player/player.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

@NgModule({
  imports: [
    RouterModule,
    AccountModule,
    AuthorizationModule,
    CatalogModule,
    HeaderModule,
    LandingModule
  ],
  declarations: [
    HomeComponent, MusicComponent, MagazinesComponent, NetflixComponent, AuthComponent, AccComponent, UserSubsComponent, UserBillAccsComponent, UserInfComponent, AdminPageComponent, PlayerComponent, NotFound404Component
  ],
  exports: [
    HomeComponent, MusicComponent, MagazinesComponent, NetflixComponent, AuthComponent, AccComponent, NotFound404Component
  ]
})
export class LayoutModule { }
