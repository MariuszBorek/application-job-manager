import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  email: string;
  password: string;

  @Input() user: User;

  constructor(private loginSevice: LoginService, private router: Router) { }

  login(): void {
    this.loginSevice.LogInUser(this.email, this.password).subscribe(user => this.user = user);
    console.log(this.user);
    this.router.navigate(['/todo']);
  }

  ngOnInit(): void {
  }

}
