export class BillingAccount {
  id: number;
  balance: number;
  payment_method: string;
  userId: number;

  constructor(id: number, balance: number, payment_method: string, userId: number){
    this.id = id;
    this.balance = balance;
    this.payment_method = payment_method;
    this.userId = userId;
  }
}


