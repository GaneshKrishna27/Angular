import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj:Customer;
  constructor() { 
    this.obj={name:"ganesh",city:"eluru",address:'eluru',email:"g@g.com",mobile:123456789}
  }

  ngOnInit() {
  }

}
