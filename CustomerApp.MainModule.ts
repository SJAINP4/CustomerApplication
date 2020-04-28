import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router"
import { MainRoutes } from './Routing/CustomerApp.MainRouting';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent ';
import {SupplierComponent} from './Supplier/CustomerApp.SupplierComponent';
import {CustomerComponent} from './Customer/CustomerApp.CustomerComponent';
import { ILogger, DbLogger, BaseLogger, ConsoleLogger } from './Utility/CustomerApp.Logger';

var providerscroll: any =[];
//http call get this from the server
providerscroll.push({ provide: "1", useClass: DbLogger});
providerscroll.push({ provide: "2", useClass: ConsoleLogger});
providerscroll.push({ provide: BaseLogger, useClass: ConsoleLogger});

@NgModule({
  declarations: [
     CustomerComponent,
     MasterPageComponent, 
     HomeComponent, SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [providerscroll],
  bootstrap: [MasterPageComponent]
})
export class MainModule {
  
 }
