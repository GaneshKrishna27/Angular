import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = null;
  imagepath:string='assets/Images/Google.jpg'
  fname:string="ganesh";
  lname:string="krishna";
  mystyle:string="boldclass "
  applystyle:string="italicclass"
  getname():string{
    this.fname=this.fname.toUpperCase()
    return this.fname+""+this.lname;
  }
isdisabled:boolean=false;
}

