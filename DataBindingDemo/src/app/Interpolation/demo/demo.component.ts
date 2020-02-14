import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
name:string="ganesh";
class:string="btech";
age:number=12;
  constructor() { }

  ngOnInit() {
  }

}
