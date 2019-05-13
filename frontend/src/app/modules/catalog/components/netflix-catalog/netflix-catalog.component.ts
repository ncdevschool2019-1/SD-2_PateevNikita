import {Component, OnDestroy, OnInit} from '@angular/core';
import {NetflixCatalogService} from "../../../../services/netflix-catalog.service";
import {Catalog} from "../../models/catalog";
import {Observable, Subscription} from "rxjs";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../../../services/authorization.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {BillingAccount} from "../../../account/models/billing-account";
import {Subscriptions} from "../../../account/models/subscriptions";



@Component({
  selector: 'app-netflix-catalog',
  templateUrl: './netflix-catalog.component.html',
  styleUrls: ['./netflix-catalog.component.css']
})
export class NetflixCatalogComponent implements OnInit, OnDestroy {

  public asyncCatalog: Observable<Catalog[]>;
  public p: number = 1;
  public elements: number;
  public catalog: Catalog[];
  public billingAccount: BillingAccount[] = [];
  private subscriptions: Subscription[] = [];

  addSubscriptionForm: FormGroup = new FormGroup({
    wallet: new FormControl("", Validators.required)
  });

  constructor(private netflixCatalogService: NetflixCatalogService, private authService: AuthorizationService,
              private subsService: SubscriptionService, private billingService: BillingAccountService,
              private spinner: Ng4LoadingSpinnerService) { }

  getBillingAccounts(): void {
    this.subscriptions.push(this.billingService.getBillingAccounts().subscribe(billingAccount => this.billingAccount = billingAccount));
  }

  getNetflixCatalog() {
    this.spinner.show();
    this.subscriptions.push(this.netflixCatalogService.getNetflixCatalog().subscribe(catalog => {
      this.catalog = catalog;
      this.spinner.hide();
    }));
  }

  subscribe(service: Catalog): void {
    this.subscriptions.push(this.subsService.addSubscription(
      new Subscriptions(null, null, this.authService.getAuthorizedUser().id, true, null, service)).subscribe(() => {
        this.subsService.getSubscriptions();
        this.getNetflixCatalog();
      }
    ));
  }

  getCurrentPage(p: number): void {
    this.spinner.show();
    this.asyncCatalog = this.netflixCatalogService.getCurrentPage(p);
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
    this.netflixCatalogService.getCurrentOfPages().subscribe(data => {
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
