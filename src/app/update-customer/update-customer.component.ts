import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnCancel(){
    this.router.navigateByUrl('/');
  }

}

