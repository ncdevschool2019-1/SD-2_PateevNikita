import {Catalog} from "../../catalog/models/catalog";

export class Subscriptions {
  id: number;
  expiredTime: number;
  userId: number;
  active: boolean;
  startTime: number;
  service: Catalog;


  constructor(id: number, expiredTime: number, userId: number, active: boolean, startTime: number, service: Catalog) {
    this.id = id;
    this.expiredTime = expiredTime;
    this.userId = userId;
    this.active = active;
    this.startTime = startTime;
    this.service = service;
  }
}
