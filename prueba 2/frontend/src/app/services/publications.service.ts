import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url + 'publications/';
  }

  // service_name(): Observable<any> {
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this._http.get(this.url, { headers: headers });
  // }

}
