import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TodosService } from './todos.service';

import { GET_TODOS, VisibilityFilters } from 'app/core/store/actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  filter;

  constructor(
    private store$: Store<any>,
    private todoService: TodosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let getData$ = this.store$.select('todos');
    let filterData$ = this.store$.select('todoFilter');
    this.todos = Observable.combineLatest(
      getData$,
      filterData$,
      (todos: any[], filter: any) => todos.filter(filter)
    );
    this.route.params.pluck('filter').subscribe((filter: string) => {
      this.store$.dispatch({ type: filter })
      this.filter = filter;
    });
    this.todoService.getTodos().subscribe(todos =>  this.store$.dispatch({ type: GET_TODOS, payload: todos }));
  }

  addTodo(desc: string) {
    this.todoService.addTodo(desc);
  }

  toggleTodo(todo) {
    this.todoService.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo);
  }

  modifyTodo(todo) {
    this.todoService.modifyTodo(todo);
  }

  toggleAll() {
    this.todoService.toggleAll();
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

}
