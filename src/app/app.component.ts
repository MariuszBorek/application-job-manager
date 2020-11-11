import { Component } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  choice: number;

  email: string;
  password: string;
  gotUser: User;

  constructor(private loginSevice: LoginService) { }

  login(): void {
    if (this.email && this.password) {
      this.loginSevice.LogInUser(this.email, this.password)
      .subscribe(user => this.gotUser = user);
    }
  }

  chooseTabJm(): void {
    this.choice = 0;
  }

  chooseTabTodo(): void {
    this.choice = 1;
  }

  chooseTabDrawings(): void {
    this.choice = 2;
  }

  chooseTabNotes(): void {
    this.choice = 3;
  }

  chooseTabTools(): void {
    this.choice = 4;
  }

  ngOnInit(): void {
    this.chooseTabJm();
  }


}
