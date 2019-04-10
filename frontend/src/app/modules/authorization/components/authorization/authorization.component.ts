import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe() {
    alert("Hello, World!");
  }

  notRegistered() {
    //document.getElementById("pretty").animate({height: "toggle", opacity: "toggle"}, "slow");
    }

}
