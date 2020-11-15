import { Component, OnInit, Input } from '@angular/core';
import { UserCreatorService } from '../user-creator.service';
import { User } from '../user';
import { Project } from '../project';

@Component({
  selector: 'app-jm',
  templateUrl: './jm.component.html',
  styleUrls: ['./jm.component.scss']
})
export class JmComponent implements OnInit {

  @Input() user: User;
  @Input() project: Project;

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

  createProject(title: string, description: string): void {
    const newProject: Project = {
      id: null,
      title,
      description,
      tasks: null,
      sheets: null,
      notes: null,
    };
    this.userCreatorService.addProject(this.user.id, newProject).subscribe();
  }

  ngOnInit(): void {
  }

}
