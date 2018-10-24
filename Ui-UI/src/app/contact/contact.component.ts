import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../services/customer.service';
import { ICustomer } from './../model/customer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  passid: any;
  customers: any;
  getcustomer: any;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    this.getCustomer();
  }
  getCustomers() {

    this.service.getAllCustomers('http://localhost:5000/api/customer/getAllCustomers').subscribe( response => {
      this.customers = response;
       console.log(this.customers);
      // this.savecustomerform.reset();
      }, error => {
        console.log(error);
      }
    );
     }

     getCustomer() {
       this.service.getOneCustomer(this.passid).subscribe( response => {
         this.getcustomer = response;
         console.log(this.getcustomer);
      // this.savecustomerform.reset();
      }, error => {
        console.log(error);
      }
    );
    }
  }
