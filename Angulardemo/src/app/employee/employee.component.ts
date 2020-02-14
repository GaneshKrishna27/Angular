import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

   
    firstname:string="ganesh";
    lastname:string="krishna";
    email:string="g@gmail.com";
    age:number=20;
  

    getStyle(){
      let styles={"font-style":"italic","color":"brown"};
      return styles;
    }
}

