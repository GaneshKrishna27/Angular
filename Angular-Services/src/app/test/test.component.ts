import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../service/calculate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
    console.log('Addition:'+this.service.Add(12,13));
    console.log('multiplication'+this.service.mul(12,13));
    console.log(this.service.Greet('ganesh'));
  }
  f()
  {
    console.log(this.service.Greet('krishna'));
  }
}


