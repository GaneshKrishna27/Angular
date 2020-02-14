import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
//import { ViewComponent } from './property-binding/view/view.component';
//import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import{ViewCustomerComponent}from './property-binding/view-customer/view-customer.component';
import{ViewComponent}from './Event-Binding/view/view.component';
import { DemoTwowayComponent } from './TwowayBinding/demo-twoway/demo-twoway.component';
import { FormsModule } from '@angular/forms';
import { DemoEmployeeComponent } from './TwowayBinding/demo-employee/demo-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ViewCustomerComponent,
    PropertyBindingComponent,
    DemoTwowayComponent,
    DemoEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DemoEmployeeComponent]
})
export class AppModule { }
