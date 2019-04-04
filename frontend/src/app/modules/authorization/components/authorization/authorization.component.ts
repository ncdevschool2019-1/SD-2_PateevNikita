import { Component, OnInit } from '@angular/core';

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
    alert("animation");
   /*$('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });*/
  }


}
