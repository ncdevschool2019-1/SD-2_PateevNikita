import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicCatalogService} from "../../../../services/music-catalog.service";
import {Catalog} from "../../models/catalog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-music-catalog',
  templateUrl: './music-catalog.component.html',
  styleUrls: ['./music-catalog.component.css']
})
export class MusicCatalogComponent implements OnInit, OnDestroy {

  public catalog: Catalog[];
  private subscriptions: Subscription[] = [];

  constructor(private musicCatalogService: MusicCatalogService) { }

  ngOnInit() {
    this.getMusicCatalog();
  }

  getMusicCatalog() {
     this.subscriptions.push(this.musicCatalogService.getMusicCatalog("music").subscribe(catalog => this.catalog = catalog));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
