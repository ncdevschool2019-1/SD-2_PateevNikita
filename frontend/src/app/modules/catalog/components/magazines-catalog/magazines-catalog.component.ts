import {Component, OnDestroy, OnInit} from '@angular/core';
import {Catalog} from "../../models/catalog";
import {Observable, Subscription} from "rxjs";
import {MagazinesCatalogService} from "../../../../services/magazines-catalog.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {AuthorizationService} from "../../../../services/authorization.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscriptions} from "../../../account/models/subscriptions";
import {BillingAccount} from "../../../account/models/billing-account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-magazines-catalog',
  templateUrl: './magazines-catalog.component.html',
  styleUrls: ['./magazines-catalog.component.css']
})
export class MagazinesCatalogComponent implements OnInit, OnDestroy {

  public asyncCatalog: Observable<Catalog[]>;
  public p: number = 1;
  public elements: number;
  public catalog: Catalog[];
  public billingAccount: BillingAccount[] = [];
  private subscriptions: Subscription[] = [];

  addSubscriptionForm: FormGroup = new FormGroup({
    wallet: new FormControl("", Validators.required)
  });

  constructor(private magazinesCatalogService: MagazinesCatalogService, private authService: AuthorizationService,
              private subsService: SubscriptionService, private billingService: BillingAccountService,
              private spinner: Ng4LoadingSpinnerService) { }

  getBillingAccounts(): void {
    this.subscriptions.push(this.billingService.getBillingAccounts().subscribe(billingAccount => this.billingAccount = billingAccount));
  }

  getMagazinesCatalog() {
    this.spinner.show();
    this.subscriptions.push(this.magazinesCatalogService.getMagazinesCatalog().subscribe(catalog => {
      this.catalog = catalog;
      this.spinner.hide();
    }));

  }

  subscribe(service: Catalog): void {
    this.subscriptions.push(this.subsService.addSubscription(
      new Subscriptions(null, null, this.authService.getAuthorizedUser().id, true, null, service)).subscribe(() => {
        this.subsService.getSubscriptions();
        this.getMagazinesCatalog();
      }
    ));
  }

  getCurrentPage(p: number): void {
    this.spinner.show();
    this.asyncCatalog = this.magazinesCatalogService.getCurrentPage(p);
    this.p = p;
    this.subscriptions.push(this.asyncCatalog.subscribe(() => {
      this.spinner.hide();
    }));
  }

  isUser(): boolean {
    return this.authService.isUser();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.magazinesCatalogService.getCurrentOfPages().subscribe(data => {
        this.elements = data;
        this.getCurrentPage(1);
      })
    );
    this.getBillingAccounts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
