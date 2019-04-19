import { Component, OnInit } from '@angular/core';
import {Catalog} from "../../models/catalog";
import {Subscription} from "rxjs";
import {MagazinesCatalogService} from "../../../../services/magazines-catalog.service";

@Component({
  selector: 'app-magazines-catalog',
  templateUrl: './magazines-catalog.component.html',
  styleUrls: ['./magazines-catalog.component.css']
})
export class MagazinesCatalogComponent implements OnInit {

  public catalog: Catalog[];
  private subscription: Subscription;

  constructor(private magazinesCatalogService: MagazinesCatalogService) { }

  ngOnInit() {
    this.getMagazinesCatalog();
  }

  getMagazinesCatalog() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.magazinesCatalogService.getMagazinesCatalog().subscribe(catalog => this.catalog = catalog);
  }
}
