import { from } from "rxjs";
import { Routes } from '@angular/router';
import { CustomersComponent } from "./customers/customers.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { UpdateCustomerComponent } from "./update-customer/update-customer.component";

export const APP_ROUTES : Routes = [
    {
        path : '',                      // http://localhost:4200
        component : CustomersComponent
    },{
        path : 'update-customer',               // http://localhost:4200/update-customer
        component : UpdateCustomerComponent
    },{
        path : 'new-customer',                   // http://localhost:4200/new-customer
        component : NewCustomerComponent
    }
]