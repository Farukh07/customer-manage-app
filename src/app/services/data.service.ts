import { Injectable } from '@angular/core';
import { CUSTOMER_DATA } from "../customers/model/customer-data";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient){}

  private baseUrl = 'http://localhost:4200/assets/data/customer-data.json';

    getUserData(){
        return CUSTOMER_DATA;
    }

    // Remote GET Call
    getUserDataFromAPI(){
        return this.httpClient.get(`${this.baseUrl}`)
    }

    postUserData(data){
      console.log([...CUSTOMER_DATA, data]);
    }

    postUserDataToAPI(new_customer){
      this.httpClient.post(`${this.baseUrl}`,
    new_customer) .subscribe(
      val => {
          console.log("PUT call successful value returned in body", 
                      val);
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
    );
    }

  }