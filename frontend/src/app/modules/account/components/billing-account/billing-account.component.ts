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
    add_money: new FormControl("",
      [Validators.required,Validators.max(999999999),Validators.pattern('^[0-9]+$')])
  });

  constructor(private billingAccountService: BillingAccountService) { }

  updateAddMoneyForms() {
    this.addMoneyForm = new FormGroup({
      add_money: new FormControl("",
        [Validators.required,Validators.max(999999999),Validators.pattern('^[0-9]+$')])
    });
  }

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
     this.billingAccount.forEach(value => {
       if(value.id == baId) {
         this.subscriptions.push(
           this.billingAccountService.addMoney(new BillingAccount(value.id, value.balance + Number(this.addMoneyForm.get("add_money").value), value.payment_method, value.userId))
             .subscribe(() => {
               this.updateBillingAccounts();
             }));
       }
     });
     this.updateAddMoneyForms();
  }

  ngOnInit() {
    this.getBillingAccounts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
