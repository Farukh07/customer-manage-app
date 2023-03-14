import { Component, OnInit } from '@angular/core';
import { Customer } from './model/customer';
import { CUSTOMER_DATA } from './model/customer-data';
import { DataService } from '../services/data.service';
import { Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  customers : Customer[];

    ngOnInit(){
        // console.log("OnInit");
        // this.customers = CUSTOMER_DATA;
        // this.customers = this.dataService.getUserData();

        this.dataService.getUserDataFromAPI()
        .subscribe(response => {
            console.log("[RESPONSE]", response)
            this.customers = response['customer-data'];
        });


        this.customers.forEach(customer =>{
          if(customer.gender === "Male"){
            customer.image = "./assets/images/male-icon.jpg"
          }
          else{
            customer.image = "./assets/images/female-icon.png"
          }
        })
        // console.log(this.customers[0].firstName);
    }

    btnClick(){
      this.router.navigateByUrl('/new-customer');
    }

    customerClick(){
      this.router.navigateByUrl('/update-customer');
    }
    

}
