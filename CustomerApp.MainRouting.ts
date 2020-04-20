import { HomeComponent } from '../Home/CustomerApp.HomeComponent ';

export const MainRoutes=[
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerMdule'},
    {path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplieModule#SupplierModule'},
    {path: '', component: HomeComponent}
];
