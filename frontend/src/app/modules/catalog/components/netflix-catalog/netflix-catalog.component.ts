import {Component, OnDestroy, OnInit} from '@angular/core';
import {NetflixCatalogService} from "../../../../services/netflix-catalog.service";
import {Catalog} from "../../models/catalog";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-netflix-catalog',
  templateUrl: './netflix-catalog.component.html',
  styleUrls: ['./netflix-catalog.component.css']
})
export class NetflixCatalogComponent implements OnInit, OnDestroy {

  public catalog: Catalog[];
  private subscriptions: Subscription[] = [];

  constructor(private netflixCatalogService: NetflixCatalogService) { }

  ngOnInit() {
    this.getNetflixCatalog();
  }

  getNetflixCatalog() {
    this.subscriptions.push(this.netflixCatalogService.getNetflixCatalog().subscribe(catalog => this.catalog = catalog));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
