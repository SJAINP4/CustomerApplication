import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from'@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent ';
import {MainRoutes} from "./Routing/CustomerApp.MainRouting"
@NgModule({
  declarations: [
    CustomerComponent,MasterPageComponent,
    HomeComponent,SupplierComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
