import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsStairCalculatorComponent } from './tools-stair-calculator/tools-stair-calculator.component';
import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator/tools-u-value-calculator.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserComponent } from './user/user.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
