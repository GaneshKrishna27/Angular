import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateService } from './service/calculate.service';
import { TestComponent } from './test/test.component';
import { TestdemoComponent } from './testdemo/testdemo.component';
import{HttpClientModule}from "@angular/common/http";
import { DemoComponent } from './demo/demo.component';
import { ItemService } from './service/item.service';
import { ViewallComponent } from './viewall/viewall.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestdemoComponent,
    DemoComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService,ItemService],
  bootstrap: [ViewallComponent]
})
export class AppModule { }
