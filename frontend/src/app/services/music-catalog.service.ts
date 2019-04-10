import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../modules/catalog/models/catalog";
import {HeaderService} from "./header.service";

@Injectable({
  providedIn: 'root'
})

export class MusicCatalogService {

  getMusicCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('http://localhost:8081/api/music/' + this.headerService.getSelectedLink().name.toLowerCase());
  }

  constructor(private http: HttpClient, private headerService: HeaderService) { }
}
