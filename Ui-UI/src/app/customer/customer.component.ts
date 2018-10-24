import { CustomerService } from './../services/customer.service';
import { ICustomer } from './../model/customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 // icustomer: ICustomer[];

icustomer: ICustomer = {
  // CustomerName: 'CustomerUI',
  // CustomerCode: '213'
  CustomerName: null,
  CustomerCode: null
};

  constructor(private service: CustomerService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
  }

  saveCustomer(newicustomer: ICustomer) {
 this.service.addCustomer(newicustomer).subscribe(
   (data: ICustomer) => {
    console.log(newicustomer);
    this.router.navigateByUrl('/contact');
   // this.savecustomerform.reset();
   }
 );
  }
}
