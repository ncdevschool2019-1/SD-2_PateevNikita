export class BillingAccount {
  balance: string;
  billing_acc_id: string;
  paynment_method: string;

  static cloneBase(billingAccout: BillingAccount): BillingAccount {
    const clonedBillingAccount: BillingAccount = new BillingAccount();
    clonedBillingAccount.balance = billingAccout.id;
    clonedBillingAccount.billing_acc_id = billingAccout.username;
    clonedBillingAccount.paynment_method = billingAccout.email;
    return clonedBillingAccount;
  }
}

export class BillingAccountStr {
}
