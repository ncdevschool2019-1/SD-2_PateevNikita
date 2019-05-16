import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./modules/layout/components/auth/auth.component";
import {HomeComponent} from "./modules/layout/components/home/home.component";
import {MagazinesComponent} from "./modules/layout/components/magazines/magazines.component";
import {MusicComponent} from "./modules/layout/components/music/music.component";
import {NetflixComponent} from "./modules/layout/components/netflix/netflix.component";
import {UserBillAccsComponent} from "./modules/layout/components/user-bill-accs/user-bill-accs.component";
import {UserSubsComponent} from "./modules/layout/components/user-subs/user-subs.component";
import {UserInfComponent} from "./modules/layout/components/user-inf/user-inf.component";
import {AdminPageComponent} from "./modules/layout/components/admin-page/admin-page.component";
import {PlayerComponent} from "./modules/layout/components/player/player.component";
import {AccComponent} from "./modules/layout/components/acc/acc.component";
import {NotFound404Component} from "./modules/layout/components/not-found404/not-found404.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'catalog/music', component: MusicComponent},
  {path: 'catalog/netflix', component: NetflixComponent},
  {path: 'catalog/magazines', component: MagazinesComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'account/user', component: UserInfComponent},
  {path: 'account/subs', component: UserSubsComponent},
  {path: 'account/billing', component: UserBillAccsComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'account/player', component: PlayerComponent},
  {path: 'admin/user-subs', component: AccComponent},
  {path: '**', component: NotFound404Component}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
