export class Users {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;

  static cloneBase(users: Users): Users {
    const clonedUsers: Users = new Users();
    clonedUsers.firstName = users.firstName;
    clonedUsers.lastName = users.lastName;
    clonedUsers.userName = users.userName;
	clonedUsers.email = users.email;
    return clonedUsers;
  }
}

export class UsersStr {
}
