import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsStairCalculatorComponent } from './tools-stair-calculator/tools-stair-calculator.component';
import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator/tools-u-value-calculator.component';
import { LogInComponent } from './log-in/log-in.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolsStairCalculatorComponent,
    ToolsUValueCalculatorComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
