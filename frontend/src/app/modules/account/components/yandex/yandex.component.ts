import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubscriptionService} from "../../../../services/subscription.service";
import {Subscriptions} from "../../models/subscriptions";
import {Subscribable, Subscription} from "rxjs";

@Component({
  selector: 'app-yandex',
  templateUrl: './yandex.component.html',
  styleUrls: ['./yandex.component.css']
})
export class YandexComponent implements OnInit, OnDestroy {

  subs: Subscriptions[] = [];
  subscriptions: Subscription[] = [];
  clearIntervalInstance: any;
  flag: boolean = false;

  constructor(private subsService: SubscriptionService) { }

  getSubscriptions(): void {
    this.subscriptions.push(this.subsService.getSubscriptions().subscribe(data => {
      this.subs = data;
    }))
  }

  isThereYandex(): boolean {
    this.subs.forEach(value => {
      if(value.service.serviceName == "Yandex" && value.active == true){
        this.flag = true;
      }
    });
   return this.flag;
  }

  ngOnInit() {
    this.clearIntervalInstance =
      setTimeout(() => {
        this.getSubscriptions();
      }, 100);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    clearInterval(this.clearIntervalInstance);
  }

}
