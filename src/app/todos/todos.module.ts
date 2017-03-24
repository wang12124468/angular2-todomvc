import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';

import { TodosService } from './todos.service';

import { TodosComponent } from './todos.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  providers: [TodosService],
  declarations: [TodosComponent, TodoHeaderComponent, TodoItemComponent, TodoFooterComponent, TodoListComponent]
})
export class TodosModule { }
