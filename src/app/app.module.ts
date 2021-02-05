import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsStairCalculatorComponent } from './tools-stair-calculator/tools-stair-calculator.component';
import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator/tools-u-value-calculator.component';
import { ToolsScupperCalculatorComponent } from './tools-scupper-calculator/tools-scupper-calculator.component';
import { LoginService } from './login.service';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolsStairCalculatorComponent,
    ToolsUValueCalculatorComponent,
    ToolsScupperCalculatorComponent,
    LoginComponent,
    LogoutComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
