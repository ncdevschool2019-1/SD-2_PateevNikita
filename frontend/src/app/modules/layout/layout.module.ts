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
    HomeComponent, MusicComponent, MagazinesComponent, NetflixComponent, AuthComponent, AccComponent
  ],
  exports: [
    HomeComponent, MusicComponent, MagazinesComponent, NetflixComponent, AuthComponent, AccComponent
  ]
})
export class LayoutModule { }
