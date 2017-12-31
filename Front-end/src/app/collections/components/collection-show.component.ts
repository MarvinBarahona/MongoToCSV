/*
  // File name: /collections/components/collection-show.component.ts
  // Objective: Display the content of the selected collection.
*/

// Core imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'collection-show',
  templateUrl: './collection-show.component.html',
  styleUrls: []
})
export class CollectionShowComponent implements OnInit {
  message: string;

  constructor(
    private router: Router
  ) {
    this.message = "Select a collection on the menu";
  }

  // This functions is called when the components begins to render.
  ngOnInit(): void {
    
  }
}
