import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
val:boolean=false
  constructor() { }

  ngOnInit() {
  }
public Set()
{
 this.val=!this.val;
}
}
