import { Component, OnInit } from '@angular/core';
import { Login } from '../Model/login';

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.css']
})
export class LoginDemoComponent implements OnInit {
  obj:Login
  val:string;
 
  constructor() { 
    this.obj=new Login();
  }

  ngOnInit() {
  }
public Login(uname:string,pwd:string)
{
  if(uname=="Admin" && pwd=="12345")
  {
    this.val="successful";
  }
  else{
    this.val="failed";
  }
}
}
