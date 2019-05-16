import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicCatalogService} from "../../../../services/music-catalog.service";
import {Catalog} from "../../models/catalog";
import {Observable, Subscription} from "rxjs";
import {AuthorizationService} from "../../../../services/authorization.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Subscriptions} from "../../../account/models/subscriptions";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-music-catalog',
  templateUrl: './music-catalog.component.html',
  styleUrls: ['./music-catalog.component.css']
})
export class MusicCatalogComponent implements OnInit, OnDestroy {

  public asyncCatalog: Observable<Catalog[]>;
  public p: number = 1;
  public elements: number;
  public catalog: Catalog[];
  private subscriptions: Subscription[] = [];
  private subs: Subscriptions[] = [];
  clearIntervalInstance: any;

  constructor(private musicCatalogService: MusicCatalogService, private authService: AuthorizationService,
              private subsService: SubscriptionService, private billingService: BillingAccountService,
              private spinner: Ng4LoadingSpinnerService, private toastr: ToastrService) { }


  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(subs => this.subs = subs));
  }

  getMusicCatalog() {
    this.spinner.show();
     this.subscriptions.push(this.musicCatalogService.getMusicCatalog().subscribe(catalog => {
       this.catalog = catalog;
       catalog.sort((a1, a2) => a1.id - a2.id);
       this.spinner.hide();
     }));
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

  isThereSubscriptionInAccount(service: Catalog): boolean {
    let flag = false;
    this.subs.forEach(value => {
      if(value.service.serviceName === service.serviceName) {
        flag = true;
      }
    });
    return flag;
  }

  getCurrentPage(p: number): void {
    this.spinner.show();
    this.asyncCatalog = this.musicCatalogService.getCurrentPage(p);
    this.p = p;
    this.subscriptions.push(this.asyncCatalog.subscribe(() => {
      this.spinner.hide();
    }));
  }



  isUser(): boolean {
    return this.authService.isUser();
  }

  ngOnInit() {
    this.getMusicCatalog();
    this.subscriptions.push(
      this.musicCatalogService.getCurrentOfPages().subscribe(data => {
        this.elements = data;
        this.getCurrentPage(1);
      })
    );
    this.clearIntervalInstance = setInterval(() => {
      this.getSubscriptions();
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
