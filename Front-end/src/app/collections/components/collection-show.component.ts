/*
  // File name: /collections/components/collection-show.component.ts
  // Objective: Display the content of the selected collection.
*/

// Core imports
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'collection-show',
  templateUrl: './collection-show.component.html',
  styleUrls: []
})
export class CollectionShowComponent{
  @Input() content: any;
  message: string;

  constructor(
    private router: Router
  ) {
    this.message = "Select a collection on the menu";
  }

  // Function: prettyPrint
  // Objective: Converts the JSON to pretty format. 
  prettyPrint(content: string){
    let prettyJSON = JSON.stringify(this.content, null, 2);
    return prettyJSON;
  }
}
