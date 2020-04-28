import { HomeComponent } from '../Home/CustomerApp.HomeComponent ';
import {CustomerComponent} from '../Customer/CustomerApp.CustomerComponent';
import {SupplierComponent} from '../Supplier/CustomerApp.SupplierComponent';

export const MainRoutes=[
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerMdule'},
    {path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplieModule#SupplierModule'},
    {path: '', component: HomeComponent}
];
