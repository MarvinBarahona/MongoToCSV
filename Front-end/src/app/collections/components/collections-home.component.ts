/*
  // File name: /collections/components/collections-home.component.ts
  // Objective: Main component for the collections module
*/

// Core imports
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// Materialize
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";

// Gets the enviroment.
import { environment } from './../../../environments/environment';

// Services imports.
import { CollectionsService, Collection } from './../services';

declare var $: any;
declare var Materialize: any;

@Component({
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  collections: Collection[];
  content: any;
  collection: string;
  db_url: string;
  db_name: string;

  // Materialize
  modal = new EventEmitter<string | MaterializeAction>();

  constructor(
    private router: Router,
    private collectionsService: CollectionsService
  ) {}

  // This functions is called when the components begins to render.
  ngOnInit(): void {
    // Makes the menu responsive
    $('.button-collapse').sideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens.
    });

    this.connect();
  }

  // Function: getDBURL
  // Objective: Writes the DB URL.
  getDBURL(): string{
    return this.db_url ? this.db_url : environment.production ? "DEMO" : ".env File";
  }

  // Function: getDBName
  // Objective: Writes the DB Name.
  getDBName(): string{
    return this.db_name ? this.db_name : environment.production ? "DEMO" : ".env File";
  }

  // Function: connect
  // Objective: Gets all the collections from a database.
  connect(): void{
    this.collections = null;
    // Calls the service
    this.collectionsService.getCollections(this.db_url, this.db_name).subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }

  // Function: getContent
  // Objective: Gets the content from a collection.
  getContent(collection): any{
    this.content = "loading";
    this.collection = collection;

    // Calls the service
    this.collectionsService.getCollectionContent(this.db_url, this.db_name, collection).subscribe(
      content => {
        this.content = content;
      }
    );
  }

  // Function: setParams
  // Objective: Sets new parameters and connects.
  setParams(): void{
    if(this.db_url && this.db_name){
      this.connect();
      this.closeModal();
    }
    else{
      Materialize.toast("Invalid parameters!", 3000);
    }
  }

  // Function: demo
  // Objective: removes the parameters and connects.
  demo(){
    this.db_url = null;
    this.db_name = null;

    this.connect();
    this.closeModal();
  }

  // Materialize modal functions
  openModal() {
    this.modal.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modal.emit({ action: "modal", params: ['close'] });
  }
}
