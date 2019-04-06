import { Component, OnInit } from '@angular/core';
import {Link} from "../../../header/models/link";
import {element} from "protractor";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickMe() {
    alert("Hello, World!");
  }

  notRegistered() {

    }

}
