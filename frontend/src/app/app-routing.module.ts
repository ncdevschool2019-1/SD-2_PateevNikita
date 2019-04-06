import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccComponent} from "./modules/layout/components/acc/acc.component";
import {AuthComponent} from "./modules/layout/components/auth/auth.component";
import {HomeComponent} from "./modules/layout/components/home/home.component";
import {MagazinesComponent} from "./modules/layout/components/magazines/magazines.component";
import {MusicComponent} from "./modules/layout/components/music/music.component";
import {NetflixComponent} from "./modules/layout/components/netflix/netflix.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'music', component: MusicComponent},
  {path: 'netflix', component: NetflixComponent},
  {path: 'magazines', component: MagazinesComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'account', component: AccComponent}
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
