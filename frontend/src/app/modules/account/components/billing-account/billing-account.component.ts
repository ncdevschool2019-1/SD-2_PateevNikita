import {Component, OnInit, OnDestroy} from '@angular/core';
import {BillingAccount} from "../../models/billing-account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BillingAccountService} from "../../../../services/billing-account.service";
import {Subscription} from "rxjs";
import {AuthorizationService} from "../../../../services/authorization.service";
import {ToastrService} from "ngx-toastr";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {TokenService} from "../../../../services/token.service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  billingAccount: BillingAccount[] = [];
  clearIntervalInstance: any;

  addBillingAccountForm: FormGroup = new FormGroup({
    money: new FormControl("", Validators.required),
    payment_method: new FormControl("", Validators.required)
  });

  addMoneyForm: FormGroup = new FormGroup({
    add_money: new FormControl("",
      [Validators.required,Validators.max(999999999),Validators.pattern('^[0-9]+$')])
  });

  constructor(private billingAccountService: BillingAccountService, private authService: AuthorizationService,
              private toastr: ToastrService, private spinner: Ng4LoadingSpinnerService,
              private tokenService: TokenService, private userService: UserService) { }

  updateAddMoneyForms() {
    this.addMoneyForm = new FormGroup({
      add_money: new FormControl("",
        [Validators.required,Validators.max(999999999),Validators.pattern('^[0-9]+$')])
    });
  }

  getBillingAccounts(): void {
    this.subscriptions.push(this.billingAccountService.getBillingAccounts().subscribe(billingAccount => {
      this.billingAccount = billingAccount as BillingAccount[];
    }));
  }

  updateBillingAccounts(): void {
    this.getBillingAccounts();
  }

  deleteBillingAccount(id: number): void {
    this.spinner.show();
    this.subscriptions.push(
      this.billingAccountService.deleteBillingAccount(id).subscribe(()=>{
        this.updateBillingAccounts();
        this.spinner.hide();
      }));
    this.toastr.success("Your wallet has been successfully deleted");
  }

  submit(): void {
    this.subscriptions.push(this.billingAccountService.addBillingAccount(
      new BillingAccount(null, this.addBillingAccountForm.get("money").value, this.addBillingAccountForm.get("payment_method").value, this.authService.getAuthorizedUser().id))
      .subscribe(() => {
        this.toastr.success("New wallet has been successfully added");
        this.updateBillingAccounts();
      }, error => {
        this.toastr.error(error.error.message, "Error");
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
    this.spinner.show();
    this.clearIntervalInstance =
    setTimeout(() => {
      this.spinner.hide();
      this.getBillingAccounts();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }
}
