/*
  // File name: app.module.ts
  // Objective: Declares the main module for the app. 
*/

// Core imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third's package imports.
import { MaterializeModule } from 'angular2-materialize';

// Main components
import { AppComponent } from './app.component';

// Child modules
import { CollectionsModule } from './collections/collections.module';

// Declares the main routes.
const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/collections',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    CollectionsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
