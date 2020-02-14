import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';

@Component({
  selector: 'app-demo-employee',
  templateUrl: './demo-employee.component.html',
  styleUrls: ['./demo-employee.component.css']
})
export class DemoEmployeeComponent implements OnInit {
item: Employee
  constructor() {
    this.item=new Employee();
   }

  ngOnInit() {
  }
  public Add()
  {
    //this.item=new Employee();
    console.log(this.item)

  }

}
