import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../modules/catalog/models/catalog";

@Injectable({
  providedIn: 'root'
})

export class MusicCatalogService {

  constructor(private http: HttpClient) { }

  getMusicCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('http://localhost:8081/api/catalog/music');
  }

  getCurrentPage(p: number): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('http://localhost:8081/api/catalog/music/' + p);
  }

  getCurrentOfPages(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/api/catalog/music/pages')
  }
}
