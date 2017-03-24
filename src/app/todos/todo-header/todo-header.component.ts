import { Component, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * todomvc 中的header部分，主要是输入框
 */
@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements AfterViewInit {
  // todomvc输入框中绑定的值
  inputValue = '';
  // 输入框中的提示值
  @Input() placeholder: string = 'What needs to be done?';
  // 输入框输入值，多少ms后触发内容改变事件
  @Input() delay: number = 300;

  // 文本改变事件
  @Output() textChanges = new EventEmitter<string>();
  // 回车释放事件
  @Output() onEnterUp = new EventEmitter<string>();
  
  // 获取输入框元素
  @ViewChild('input') input: ElementRef;
  ngAfterViewInit() {
    let input$ = Observable.fromEvent(this.input.nativeElement, 'input')
      .map(() => this.inputValue)
      .filter(value => !!value.trim())
      .debounceTime(this.delay)
      .distinctUntilChanged();
    input$.subscribe(value => this.textChanges.emit(value))
  }

  /** 回车事件 */
  enterUp() {
    if(!this.inputValue.trim()) { return; }
    this.onEnterUp.emit(this.inputValue);
    this.inputValue = '';
  }

}
