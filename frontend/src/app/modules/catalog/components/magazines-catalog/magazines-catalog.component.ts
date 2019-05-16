import {Component, OnDestroy, OnInit} from '@angular/core';
import {Catalog} from "../../models/catalog";
import {Observable, Subscription} from "rxjs";
import {MagazinesCatalogService} from "../../../../services/magazines-catalog.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {AuthorizationService} from "../../../../services/authorization.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscriptions} from "../../../account/models/subscriptions";
import {ToastrService} from "ngx-toastr";

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
  private subscriptions: Subscription[] = [];
  private subs: Subscriptions[] = [];
  private clearIntervalInstance: any;


  constructor(private magazinesCatalogService: MagazinesCatalogService, private authService: AuthorizationService,
              private subsService: SubscriptionService, private billingService: BillingAccountService,
              private spinner: Ng4LoadingSpinnerService, private toastr: ToastrService) { }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(subs => this.subs = subs));
  }

  getMagazinesCatalog() {
    this.spinner.show();
    this.subscriptions.push(this.magazinesCatalogService.getMagazinesCatalog().subscribe(catalog => {
      this.catalog = catalog;
      this.spinner.hide();
    }));

  }

  isThereSubscriptionInAccount(service: Catalog): boolean {
    let flag = false;
    this.subs.forEach(value => {
      if(value.service.serviceName === service.serviceName) {
        flag = true;
      }
    });
    return flag;
  }

  subscribe(service: Catalog): void {
    this.toastr.clear();
    this.subscriptions.push(this.billingService.getBalanceFromBillingAccount().subscribe(data => {
      if (service.cost > data) {
        this.toastr.warning("You don't have enough funds to subscribe. " +
          "Please, add money in your billing account")
      } else {
        this.subscriptions.push(this.subsService.addSubscription(new Subscriptions(null, null, this.authService.getAuthorizedUser().id, true, null, service)).subscribe(() => {
          this.getSubscriptions();
        }));
      }
    }));
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
    this.clearIntervalInstance = setTimeout(() => {
      this.getSubscriptions();
    }, 10);
    this.getMagazinesCatalog();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
