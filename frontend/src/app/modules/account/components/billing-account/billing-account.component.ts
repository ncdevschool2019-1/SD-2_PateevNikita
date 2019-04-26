import {Component, OnInit, OnDestroy, TemplateRef} from '@angular/core';
import {BillingAccount} from "../../models/billing-account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  billingAccount: BillingAccount[] = [];

  addBillingAccountForm: FormGroup = new FormGroup({
    money: new FormControl("", Validators.required),
    payment_method: new FormControl("", Validators.required)
  });

  addMoneyForm: FormGroup = new FormGroup({
    add_money: new FormControl("", Validators.required)
  });



  constructor(private billingAccountService: BillingAccountService) { }



  getBillingAccounts(): void {
    this.subscriptions.push(this.billingAccountService.getBillingAccounts().subscribe(billingAccount => this.billingAccount = billingAccount as BillingAccount[]));
  }

  updateBillingAccounts(): void {
    this.getBillingAccounts();
  }

  deleteBillingAccount(id: number): void {
    this.subscriptions.push(
      this.billingAccountService.deleteBillingAccount(id).subscribe(()=>{
        this.updateBillingAccounts();
      }));
  }

  submit(): void {
    this.subscriptions.push(this.billingAccountService.addBillingAccount(
      new BillingAccount(null, this.addBillingAccountForm.get("money").value, this.addBillingAccountForm.get("payment_method").value, 1))
      .subscribe(() => {
        this.updateBillingAccounts();
      }));
  }

  addMoney(baId: number): void {
    this.subscriptions.push(
      this.billingAccountService.addMoney(new BillingAccount(this.billingAccount[baId].id, this.billingAccount[baId].balance + Number(this.addMoneyForm[baId].get("add_money").value), this.billingAccount[baId].payment_method, this.billingAccount[baId].userId))
        .subscribe(() => {
          this.billingAccountService.updateBillingAccounts();
        }));
  }

  ngOnInit() {
    this.getBillingAccounts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
