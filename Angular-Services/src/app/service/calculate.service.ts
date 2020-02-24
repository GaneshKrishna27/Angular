import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  public Add(i:number,j:number):number
  {
    return Number(i)+Number(j);
  }
  public Sub(i:number,j:number):number
  {
    return Number(i)-Number(j);
  }
  public mul(i:number,j:number):number
  {
    return i*j;
  }
  public Div(i:number,j:number):number
  {
    return i/j;
  }
  public Greet(name:string):string
  {
    let v='Hello'+name;
    return v;
  }

}
