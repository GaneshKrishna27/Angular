import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './ng_If/demo/demo.component';
import { Demo1Component } from './ng_For/demo1/demo1.component';
import { Demo2Component } from './ng_For/demo2/demo2.component';
import { Demo3Component } from './ng_For/demo3/demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Demo3Component]
})
export class AppModule { }
