export class Account {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;

  static cloneBase(account: Account): Account {
    const clonedAccount: Account = new Account();
    clonedAccount.firstName = account.firstName;
    clonedAccount.lastName = account.lastName;
    clonedAccount.userName = account.userName;
	clonedAccount.email = account.email;
    return clonedAccount;
  }
}

export class AccountStr {
}
