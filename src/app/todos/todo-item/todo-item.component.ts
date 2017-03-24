import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  // todo 值
  @Input() todo;

  // item 修改事件
  @Output() itemModified = new EventEmitter();
  // item 删除事件
  @Output() itemRemoved = new EventEmitter();
  // item 状态改变事件
  @Output() itemToggle = new EventEmitter();

  private editing = false;

  /** 改变completed状态 */
  toggle() {
    this.itemToggle.emit(this.todo);
  }

  /** 删除item */
  remove() {
    this.itemRemoved.emit(this.todo);
  }

  /** 编辑当前item */
  edit(input) {
    setTimeout(() => input.focus(), 0);
    this.editing = true;
  }

  /** 停止编辑当前item */
  stopEditing(desc: string) {
    this.editing = false;
    let value = desc.trim();
    if(!value) {
      this.remove();
    }else if(value !== this.todo.desc) {
      let updateTodo = Object.assign({}, this.todo, { desc: desc });
      this.itemModified.emit(updateTodo)
    }
  }

  /** 取消编辑当前item */
  cancelEditing() {
    this.editing = false;
  }

}
