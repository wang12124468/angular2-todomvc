import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';

import { TodosComponent } from './todos.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodosComponent, TodoHeaderComponent]
})
export class TodosModule { }
