import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsStairCalculatorComponent } from './tools-stair-calculator/tools-stair-calculator.component';
import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator/tools-u-value-calculator.component';
import { ToolsScupperCalculatorComponent } from './tools-scupper-calculator/tools-scupper-calculator.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolsStairCalculatorComponent,
    ToolsUValueCalculatorComponent,
    ToolsScupperCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
