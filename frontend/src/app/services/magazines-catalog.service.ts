import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Catalog} from "../modules/catalog/models/catalog";

@Injectable({
  providedIn: 'root'
})
export class MagazinesCatalogService {

  constructor(private http: HttpClient) { }

  getMagazinesCatalog(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('http://localhost:8081/api/catalog/magazines');
  }

  getCurrentPage(p: number): Observable<Catalog[]> {
    return this.http.get<Catalog[]>('http://localhost:8081/api/catalog/magazines/' + p);
  }

  getCurrentOfPages(): Observable<number> {
    return this.http.get<number>('http://localhost:8081/api/catalog/magazines/pages')
  }
}
