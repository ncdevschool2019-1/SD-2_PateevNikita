import {Component, OnDestroy, OnInit} from '@angular/core';
import {MusicCatalogService} from "../../../../services/music-catalog.service";
import {Catalog} from "../../models/catalog";
import {Observable, Subscription} from "rxjs";
import {AuthorizationService} from "../../../../services/authorization.service";
import {SubscriptionService} from "../../../../services/subscription.service";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccount} from "../../../account/models/billing-account";
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
  public billingAccount: BillingAccount[] = [];
  private subscriptions: Subscription[] = [];

  addSubscriptionForm: FormGroup = new FormGroup({
    wallet: new FormControl("", Validators.required)
  });

  constructor(private musicCatalogService: MusicCatalogService, private authService: AuthorizationService,
              private subsService: SubscriptionService, private billingService: BillingAccountService,
              private spinner: Ng4LoadingSpinnerService, private toastr: ToastrService) { }

  getBillingAccounts(): void {
    this.subscriptions.push(this.billingService.getBillingAccounts().subscribe(billingAccount => this.billingAccount = billingAccount));
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
     this.subscriptions.push(this.billingService.getBalanceFromBillingAccount().subscribe(data => {
       if (service.cost > data) {
         this.toastr.warning("You don't have enough funds to subscribe. " +
           "Please, add money in your billing account")
       } else {
         this.subscriptions.push(this.subsService.addSubscription(new Subscriptions(null, null, this.authService.getAuthorizedUser().id, true, null, service)).subscribe(() => {
           setTimeout(() => {
             this.getMusicCatalog();
           }, 1000);
         }));
       }
     }));
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

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.musicCatalogService.getCurrentOfPages().subscribe(data => {
        this.elements = data;
        this.getCurrentPage(1);
      })
    );
    this.getMusicCatalog();
    this.getBillingAccounts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
