import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../service/calculate.service';

@Component({
  selector: 'app-testdemo',
  templateUrl: './testdemo.component.html',
  styleUrls: ['./testdemo.component.css'],
  providers:[CalculateService]
})
export class TestdemoComponent implements OnInit {

  constructor(c:CalculateService ) { }

  ngOnInit() {
   
  }

}