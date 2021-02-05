import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Project } from '../project';
import { AuthenticationService } from '../service/authentication.service';
import { UserCreatorService } from '../user-creator.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(public authenticationService: AuthenticationService, private loginSevice: LoginService, private userCreatorService: UserCreatorService, private router: Router) { }

checkIfProjectsExist(): boolean {
  if(typeof this.projects === "undefined" || this.projects.length === 0) {
    return false;
  }
  return true;
}

  showProjects(): void {
      this.loginSevice.getProjects().subscribe(projects => this.projects = projects);
  }


  chooseProject(project: Project): void {
    localStorage.setItem('project', project.id.toString());
    localStorage.setItem('projectTitle', project.title.toString());
    this.router.navigate(['jm']);

  }

  removeProject(projectId: number): void {
    this.loginSevice.deleteProject(projectId).subscribe(projects => {
      this.projects = projects;
      localStorage.removeItem('project');
      window.location.reload();
    });
  }


  createProject(title: string, description: string): void {
    const newProject: Project = {
      id: null,
      title,
      description,
      tasks: null,
      taskarchive: null,
      sheets: null,
      notes: null,
      scuppers: null
    };
    this.userCreatorService.addProject(newProject).subscribe(e => window.location.reload());
  }

  ngOnInit(): void {
    this.showProjects();
  }

}
