import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  /*subscribeToService(service: Service): Observable<Sub> {
    let sub: Sub = new Sub(null, this.usersService.getActiveUser().id, null, null, null, service);
    return this.http.post<Sub>(this.fapiServerUrl, sub);
  }*/


}
