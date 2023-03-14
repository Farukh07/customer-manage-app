import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { from } from 'rxjs';
import { APP_ROUTES } from './app.routes';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
