import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    // Calls the service
    this.collectionsService.getCollections().subscribe(
      collections => {
        this.collections = collections;
      }
    );
  }
}
