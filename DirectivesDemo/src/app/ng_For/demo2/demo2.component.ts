import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
sid:number;
sname:string;
std:string;
age:number;
list:Student[]=[];
item:Student
stds:string[]=["it","cse","eee","ece"];
val:boolean=true;
  constructor() {
    this.list=[{sid:1,sname:'karthik',std:'cse',age:12},
    {sid:1,sname:'karrr',std:'cse',age:12},
    {sid:2,sname:'kaaaa',std:'cse',age:12},
    {sid:3,sname:'karthiiii',std:'cse',age:12},
    {sid:4,sname:'karthikkkk',std:'cse',age:12}
  ]
   }

  ngOnInit() {
  }
public Add()
{
  this.item=new Student();
  this.item.sid=this.sid;
  this.item.sname=this.sname;
  this.item.std=this.std;
  this.item.age=this.age;
  this.list.push(this.item)
  console.log(this.list);
}
public SetVal()
{
  this.val=!this.val;
}
}
