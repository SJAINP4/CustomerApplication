import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from'@angular/router'
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { HomeComponent } from './CustomerApp.HomeComponent ';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';

@NgModule({
  declarations: [
     MasterPageComponent, HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
