import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
item:Employee;
list:Employee[]=[]
pid:number;
pname:string;
domain:string;
startdate:Date;
enddate:Date;
domains:string[]=["Developer","Testing","FrontEnd","MiddileEnd"];
  constructor() {
    this.list=[]
   }

  ngOnInit() {
  }
public Create()
{
  this.item=new Employee();
    this.item.pid=this.pid;
    this.item.pname=this.pname;
    this.item.domain=this.domain;
    this.item.startdate=this.startdate;
    this.item.enddate=this.enddate;
    this.list.push(this.item);
    console.log(this.list);
}
}
