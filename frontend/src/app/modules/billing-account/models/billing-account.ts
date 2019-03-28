export class BillingAccount {
  balance: string;
  billing_acc_id: string;
  paynment_method: string;

  static cloneBase(billingAccount: BillingAccount): BillingAccount {
    const clonedBillingAccount: BillingAccount = new BillingAccount();
    clonedBillingAccount.balance = billingAccount.balance;
    clonedBillingAccount.billing_acc_id = billingAccount.billing_acc_id;
    clonedBillingAccount.paynment_method = billingAccount.paynment_method;
    return clonedBillingAccount;
  }
}

export class BillingAccountStr {
}
