/*
  // File name: /collections/components/collection-list.component.ts
  // Objective: Display a menu with all the collections.
*/

// Core imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services imports.
import { CollectionsService, Collection } from './../services';

@Component({
  selector: 'collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: []
})
export class CollectionsListComponent implements OnInit {
  collections: Collection[];

  constructor(
    private router: Router,
    private collectionsService: CollectionsService
  ) {}

  // This functions is called when the components begins to render. 
  ngOnInit(): void {
    // Calls the service
    this.collectionsService.getCollections().subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }
}
