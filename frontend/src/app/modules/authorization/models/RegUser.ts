export class RegUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  userPassword: string;


  constructor(firstName: string, lastName: string, userName: string, email: string, userPassword: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.userPassword = userPassword;
  }
}
