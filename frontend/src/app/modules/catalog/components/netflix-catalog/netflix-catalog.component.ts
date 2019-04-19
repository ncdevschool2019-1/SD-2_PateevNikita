import { Component, OnInit } from '@angular/core';
import {NetflixCatalogService} from "../../../../services/netflix-catalog.service";
import {Catalog} from "../../models/catalog";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-netflix-catalog',
  templateUrl: './netflix-catalog.component.html',
  styleUrls: ['./netflix-catalog.component.css']
})
export class NetflixCatalogComponent implements OnInit {

  public catalog: Catalog[];
  private subscription: Subscription;

  constructor(private netflixCatalogService: NetflixCatalogService) { }

  ngOnInit() {
    this.getNetflixCatalog();
  }

  getNetflixCatalog() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.netflixCatalogService.getNetflixCatalog().subscribe(catalog => this.catalog = catalog);
  }

}
