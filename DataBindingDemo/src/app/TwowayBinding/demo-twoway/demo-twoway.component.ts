import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-twoway',
  templateUrl: './demo-twoway.component.html',
  styleUrls: ['./demo-twoway.component.css']
})
export class DemoTwowayComponent implements OnInit {
  msg:string='good mrg';

  constructor() {
    console.log(this.msg);
   }

  ngOnInit() {
  }

}
