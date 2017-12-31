/*
  // File name: /collections/components/collections-home.component.ts
  // Objective: Main component for the collections module
*/

// Core imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services imports.
import { CollectionsService, Collection } from './../services';

declare var $: any; 

@Component({
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  collections: Collection[];

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
    }
  );

    // Calls the service
    this.collectionsService.getCollections().subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }
}
