import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Student;

  constructor() { 
    this.obj={sid:1,sname:'gany',dob:new Date(2020,12,23),age:25,std:"btech"};
  }

  ngOnInit() {
  }

}
