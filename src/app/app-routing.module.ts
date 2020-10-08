import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TodoComponent,
  ToolsComponent
];
