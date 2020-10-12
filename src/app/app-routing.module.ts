import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ToolsComponent } from './tools/tools.component';
import { JmComponent } from './jm/jm.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { NotesComponent } from './notes/notes.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: 'jm', component: JmComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'drawings', component: DrawingsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'log-in', component: LogInComponent }
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
  NotesComponent,
  LogInComponent
];
