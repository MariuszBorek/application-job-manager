import { Component, OnInit, Input } from '@angular/core';
import { UserCreatorService } from '../user-creator.service';
import { User } from '../user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-jm',
  templateUrl: './jm.component.html',
  styleUrls: ['./jm.component.scss']
})
export class JmComponent implements OnInit {

  userEmail = this.getUserEmail();
  chosenProject = this.getProjectTitle();

  constructor(private userCreatorService: UserCreatorService, public authenticationService: AuthenticationService) { }

  createUser(name: string, surname: string, email: string, password: string): void {
    const newUser: User = {
      id: null,
      name,
      surname,
      email,
      password,
      projects: null
    };
    this.userCreatorService.addUser(newUser).subscribe();
  }

  private getUserEmail(): string {
    return sessionStorage.getItem('username');
  }

  private getProjectTitle(): string {
    return localStorage.getItem('projectTitle');
  }

  ngOnInit(): void {
  }

}
