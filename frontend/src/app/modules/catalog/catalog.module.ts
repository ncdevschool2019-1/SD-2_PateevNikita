import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MagazinesCatalogComponent} from "./components/magazines-catalog/magazines-catalog.component";
import {MusicCatalogComponent} from "./components/music-catalog/music-catalog.component";
import {NetflixCatalogComponent} from "./components/netflix-catalog/netflix-catalog.component";
import {NgxPaginationModule} from "ngx-pagination";
import {PaginationModule} from "ngx-bootstrap";
import {TooltipModule} from "ngx-tooltip";

@NgModule({
  imports: [
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PaginationModule,
    TooltipModule
  ],
  exports: [
    MagazinesCatalogComponent,
    MusicCatalogComponent,
    NetflixCatalogComponent
  ],
  declarations: [
    MagazinesCatalogComponent,
    MusicCatalogComponent,
    NetflixCatalogComponent
  ]
})
export class CatalogModule { }
