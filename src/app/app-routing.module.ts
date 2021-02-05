import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ToolsComponent } from './tools/tools.component';
import { JmComponent } from './jm/jm.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { ToolsScupperCalculatorComponent } from './tools-scupper-calculator/tools-scupper-calculator.component';
import { ToolsStairCalculatorComponent } from './tools-stair-calculator/tools-stair-calculator.component';
import { ToolsUValueCalculatorComponent } from './tools-u-value-calculator/tools-u-value-calculator.component';

const routes: Routes = [
  { path: '',   redirectTo: '/jm', pathMatch: 'full' },
  { path: 'jm', component: JmComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'drawings', component: DrawingsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'tools-scupper-calculator', component: ToolsScupperCalculatorComponent },
  { path: 'tools-stair-calculator', component: ToolsStairCalculatorComponent },
  { path: 'tools-u-value-calculator', component: ToolsUValueCalculatorComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'log-out', component: LogoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TodoComponent,
  ToolsComponent,
  JmComponent,
  DrawingsComponent,
  NotesComponent
];
