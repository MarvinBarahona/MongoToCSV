/*
  // File name: /collections/components/collection-show.component.ts
  // Objective: Display the content of the selected collection.
*/

// Core imports
import { Component, Input } from '@angular/core';

@Component({
  selector: 'collection-show',
  templateUrl: './collection-show.component.html',
  styleUrls: []
})
export class CollectionShowComponent{
  @Input() content: any;
  @Input() collection: string;
  message: string;

  constructor() {
    this.message = "Select a collection on the menu";
  }

  // Function: prettyPrint
  // Objective: Converts the JSON to pretty format.
  prettyPrint(content: string){
    let prettyJSON = JSON.stringify(this.content, null, 2);
    return prettyJSON;
  }
}
