import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
name:string;
c:number;
  constructor() { }

  ngOnInit() {
  }
  public setName()
  {
    this.name='Rohan';
  }
  public greet(value:string)
  {
    this.name=value;

  }

  public sum(a:number,b:number)
  {
    this.c=Number(a)+Number(b);
   
  }
  public sub(a:number,b:number)
  {
    this.c=Number(a)-Number(b);
  }


}
