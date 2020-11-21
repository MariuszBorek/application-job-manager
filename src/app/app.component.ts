import { Component } from '@angular/core';
import { User } from './user';
import { LoginService } from './login.service';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'j-manager';

  choice: number;

  username: string;
  password: string;
  gotUser: User;
  projects: Project[];
  choosenProject: Project;

  constructor(private loginSevice: LoginService) { }

  login(): void {
    if (this.username && this.password) {
      this.loginSevice.LogInUser(this.username, this.password)
      .subscribe(user => this.gotUser = user);
    }
  }

  // login(): void {
  //   if (this.email && this.password) {
  //     this.loginSevice.LogInUser(this.email, this.password)
  //     .subscribe(user => this.gotUser = user);
  //   }
  // }

  showProjects(): void {
    if (this.gotUser) {
    this.loginSevice.getProjects(this.username, this.password, this.gotUser.id).subscribe(projects => this.projects = projects);
    }
  }

  chooseProject(project: Project): void {
    this.choosenProject = project;
    this.projects = null;
  }

  removeProject(projectId: number): void {
    this.loginSevice.deleteProject(this.username, this.password, projectId).subscribe(projects => this.projects = projects);
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
