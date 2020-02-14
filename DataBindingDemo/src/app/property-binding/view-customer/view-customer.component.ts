import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
item:Customer
  constructor() {
   this.item=new Customer();
   this.item.name="ganesh;"
   this.item.city="eluru";
   this.item.address="rkp";
   this.item.email="g@mail.com";
   this.item.mobile=987654321
   }

  ngOnInit() {
  }

}
