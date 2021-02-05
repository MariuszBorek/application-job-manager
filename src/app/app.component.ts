import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'j-manager';

  constructor() { }

  ngOnInit(): void {

  }

}
