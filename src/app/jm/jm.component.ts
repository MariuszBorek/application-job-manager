import { Component, OnInit, Input } from '@angular/core';
import { UserCreatorService } from '../user-creator.service';
import { User } from '../user';

@Component({
  selector: 'app-jm',
  templateUrl: './jm.component.html',
  styleUrls: ['./jm.component.scss']
})
export class JmComponent implements OnInit {

  @Input() user: User;

  constructor(private userCreatorService: UserCreatorService) { }

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

  ngOnInit(): void {
  }

}
