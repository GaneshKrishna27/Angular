import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoStrDir';
  Customer:any[]=[{"name":'raj',"country":'india',age:24},
  {"name":'gany',"country":'india',age:22},
  {"name":'krish',"country":'india',age:26}];

StudentbyCountry:any[]=
[
  {"country":"india","student":[{"name":"jay","age":"23"},{"name":"rani","age":"33"}]},
  {"country":"us","student":[{"name":"tom","age":"23"},{"name":"jerry","age":"33"}]}
  
]
  }