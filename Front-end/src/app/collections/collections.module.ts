/*
  // File name: /collections/collections.module.ts
  // Objective: Declares the collections module
*/

// Core imports.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Third's package imports.
import { MaterializeModule } from 'angular2-materialize';

// This module imports.
import { CollectionShowComponent } from './components/';
import { CollectionsHomeComponent } from './components/';
import { CollectionToCSVComponent } from './components/';
import { CollectionsService } from './services/';

// The routes for this module.
const collectionRoutes: Routes = [
  {
    path: 'collections',
    component: CollectionsHomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    RouterModule.forChild(collectionRoutes)
  ],
  declarations: [
    CollectionShowComponent,
    CollectionToCSVComponent,
    CollectionsHomeComponent
  ],
  providers: [CollectionsService]
})
export class CollectionsModule { }
