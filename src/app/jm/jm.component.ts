import { Component, OnInit, Input } from '@angular/core';
import { UserCreatorService } from '../user-creator.service';
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jm',
  templateUrl: './jm.component.html',
  styleUrls: ['./jm.component.scss']
})
export class JmComponent implements OnInit {

  userEmail = this.getUserEmail();
  chosenProject = this.getProjectTitle();
  isAwake: string;


  constructor(private userCreatorService: UserCreatorService, public authenticationService: AuthenticationService, private router: Router) { }

  createUser(name: string, surname: string, email: string, password: string): void {
    const newUser: User = {
      id: null,
      name,
      surname,
      email,
      password,
      projects: null
    };
    this.userCreatorService.addUser(newUser).subscribe(e => this.router.navigate(['log-in']));
  }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectTitle(): string {
    return localStorage.getItem('projectTitle');
  }

  private onWakeUpServer() {
    this.userCreatorService.wakeUpServer().subscribe(isAwake => this.isAwake = isAwake);
  }

  ngOnInit(): void {
    this.onWakeUpServer();
  }



}
