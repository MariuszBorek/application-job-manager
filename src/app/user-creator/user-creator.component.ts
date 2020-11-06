import { Component, OnInit } from '@angular/core';
import { UserCreatorService } from '../user-creator.service';
import { User } from '../user';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.scss']
})
export class UserCreatorComponent implements OnInit {

  constructor(private userCreatorService: UserCreatorService) { }

  ngOnInit(): void {
  }

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

}
