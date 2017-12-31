/*
  // File name: /collections/components/collection-to-csv.component.ts
  // Objective: Transforms the JSON content of the collecttion to CSV file.
*/

// Core imports
import { Component, Input } from '@angular/core';

import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'collection-to-csv',
  templateUrl: './collection-to-csv.component.html',
  styleUrls: []
})
export class CollectionToCSVComponent{
  @Input() collection: string;
  @Input() content: any;
  message: string;

  constructor() {
    this.message = "Select a collection on the menu";
  }

  // Function: collectionToCSV
  // Objective: Converts the JSON content to CSV file
  collectionToCSV(){
    new Angular2Csv(this.content, this.collection);
  }
}
