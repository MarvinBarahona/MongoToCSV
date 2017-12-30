import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './../../../environments/environment';

import { Collection } from './';

@Injectable()
export class CollectionsService {
  baseUrl: string;
  headers: Headers;

  constructor(private http: Http) {
    this.baseUrl = environment.apiURL;
    this.headers = new Headers({ 'Content-Type': 'application/json', });
  }

  // Function: getCollections
  // Objective: Gets all the collections.
  getCollections(): Observable<Collection[]> {
    let url = this.baseUrl + '/collections';

    // Calls the service.
    return this.http.get(url, { headers: this.headers }).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
