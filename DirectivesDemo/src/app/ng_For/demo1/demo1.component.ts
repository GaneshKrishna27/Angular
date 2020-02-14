import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
 no:number[]=[11,12,52,63,41]
 name:string[]=['gany','karthik','sidhu','krish']
  constructor() { 
    this.name.push("komal")
  }

  ngOnInit() {
  }

}
