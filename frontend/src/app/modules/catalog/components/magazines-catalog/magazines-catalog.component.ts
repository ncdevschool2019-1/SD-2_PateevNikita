import {Component, OnDestroy, OnInit} from '@angular/core';
import {Catalog} from "../../models/catalog";
import {Subscription} from "rxjs";
import {MagazinesCatalogService} from "../../../../services/magazines-catalog.service";

@Component({
  selector: 'app-magazines-catalog',
  templateUrl: './magazines-catalog.component.html',
  styleUrls: ['./magazines-catalog.component.css']
})
export class MagazinesCatalogComponent implements OnInit, OnDestroy {

  public catalog: Catalog[];
  private subscriptions: Subscription[] = [];
  public isVisible: boolean = false;

  constructor(private magazinesCatalogService: MagazinesCatalogService) { }

  ngOnInit() {
    this.getMagazinesCatalog();
  }

  getMagazinesCatalog() {
    this.subscriptions.push(this.magazinesCatalogService.getMagazinesCatalog().subscribe(catalog => this.catalog = catalog));
    this.isVisible = true;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
