/*
  // File name: /collections/services/collections.service.ts
  // Objective: Communicates with the back end server.
*/

// Core imports.
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Gets the enviroment.
import { environment } from './../../../environments/environment';

// Classes imports.
import { Collection } from './';

@Injectable()
export class CollectionsService {
  baseUrl: string;
  headers: Headers;

  // Function: constructor
  // Objective: Sets the common variables.
  constructor(private http: Http) {
    this.baseUrl = environment.apiURL;
    this.headers = new Headers({ 'Content-Type': 'application/json', });
  }

  // Function: getCollections
  // Objective: Gets all the collections.
  getCollections(db_url: string, db_name: string): Observable<Collection[]> {
    let url = this.baseUrl + '/collections';
    let body = {};

    // If the connections params are set, sends it.
    if(db_url){
      body = {db_url: db_url, db_name: db_name};
    }

    // Calls the service.
    return this.http.post(url, body, { headers: this.headers }).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  // Function: getCollectionContent
  // Objective: Gets the content of one collection.
  getCollectionContent(db_url: string, db_name: string, collection: string): Observable<any> {
    let url = this.baseUrl + '/collections/' + collection;
    let body = {};

    // If the connections params are set, sends it.
    if(db_url){
      body = {db_url: db_url, db_name: db_name};
    }

    // Calls the service.
    return this.http.post(url, body, { headers: this.headers }).map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
