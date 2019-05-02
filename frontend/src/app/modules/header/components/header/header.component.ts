import { Component, OnInit } from '@angular/core';
import { Link } from "../../models/link";
import { HeaderService } from "../../../../services/header.service";
import {UserService} from "../../../../services/user.service";
import {User} from "../../../account/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  /**вставить функцию getByUserId и вывести текущий userName**/

  ngOnInit() {
  }


}
