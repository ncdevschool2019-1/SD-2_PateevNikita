import {Role} from "./role";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  userPassword: string;
  role: Role;

  constructor(id: number, firstName: string, lastName: string, userName: string, email: string, userPassword: string, role: Role){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.userPassword = userPassword;
    this.role = role;
  }
}

