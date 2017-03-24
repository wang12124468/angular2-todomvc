import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  // 列表中的内容数据
  private _todos: any[] = [];
  @Input()
  set todos(todos: any[]) {
    if(todos) {
      this._todos = [...todos];
    }
  }
  get todos() {
    return this._todos;
  }

  // 删除todo
  @Output() onRemoveTodo = new EventEmitter();
  // 改变todo
  @Output() onToggleTodo = new EventEmitter();
  // 改变全部
  @Output() onToggleAll = new EventEmitter();
  // 修改todo
  @Output() onModifyTodo = new EventEmitter();
  
  /** 删除todo事件触发 */
  itemRemoved(todo) {
    this.onRemoveTodo.emit(todo);
  }
  /** 改变todo事件触发 */
  itemToggle(todo) {
    this.onToggleTodo.emit(todo);
  }
  /** 反选todo事件触发 */
  toggleAll() {
    this.onToggleAll.emit();
  }
  /** 修改todo事件触发 */
  itemModified(todo) {
    this.onModifyTodo.emit(todo);
  }
}
