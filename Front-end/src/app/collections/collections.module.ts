import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { CollectionsListComponent } from './components/';
import { CollectionsService } from './services/';

const collectionRoutes: Routes = [
  {
    path: 'collections',
    component: CollectionsListComponent
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
    CollectionsListComponent
  ],
  providers: [CollectionsService]
})
export class CollectionsModule { }
