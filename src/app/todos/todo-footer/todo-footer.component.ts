import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  // item的数量
  @Input() itemCount: number;
  // 当前的过滤器
  @Input() filter: string;

  // 清除已完成的item的事件
  @Output() onClear = new EventEmitter();

  /** 清除已完成的item */
  removeCompleted() {
    this.onClear.emit();
  }

}
