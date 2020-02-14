import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
item:Student
  constructor() {
    this.item=new Student();
    this.item.sid=1;
    this.item.sname='ganesh';
    this.item.dob=new Date(2020,6,25);
    this.item.std="btech";
    this.item.age=25;
   }

  ngOnInit() {
  }

}
