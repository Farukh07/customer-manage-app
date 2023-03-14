import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
  }

  onLogin(f : NgForm){
    console.log(f.value);
    // this.dataService.postUserDataToAPI(f.value);
    this.dataService.postUserData(f.value);
  }

  btnCancel(){
    this.router.navigateByUrl('/');
  }

}