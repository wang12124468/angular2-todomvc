import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Store } from '@ngrx/store';
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    TOGGLE_ALL,
    CLEAR_COMPLETED,
    MODIFY_TODO

} from 'app/core/store/actions';

// 这个相当于从网络上获取到的数据
let TODOS = [{
    id: 0,
    desc: '测试',
    completed: false
}];

let id = 0;

@Injectable()
export class TodosService {

    constructor(
        private store$: Store<any>
    ) { }

    getTodos(): Observable<any> {
       return Observable.create((observer: Observer<any>) => {
            observer.next(TODOS);
            observer.complete();
        });
    }

    addTodo(desc: string): void {
        let newTodo = {
            id: ++id,
            desc: desc,
            completed: false
        }
        // 相当于网络请求
        TODOS.push(Object.assign({}, newTodo));
        // 改变状态
        this.store$.dispatch({ type: ADD_TODO, payload: newTodo });
    }

    toggleTodo(todo): void {
        let updatedTodo = Object.assign({}, todo, { completed: !todo.completed });
        // 相当于网络请求
        TODOS.map(item => item.id === todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : item)
        // 改变状态
        this.store$.dispatch({ type: TOGGLE_TODO, payload: updatedTodo })
    }

    removeTodo(todo): void {
        // 相当于网络请求
        TODOS = TODOS.filter(item => item.id !== todo.id);
        // 改变状态
        this.store$.dispatch({ type: REMOVE_TODO, payload: todo })
    }

    modifyTodo(todo): void {
        // 相当于网络请求
        TODOS = TODOS.map(item => item.id === todo.id ? todo : item);
        // 改变状态
        this.store$.dispatch({ type: MODIFY_TODO, payload: todo })

    }

    toggleAll(): void {
        // 相当于网络请求
        TODOS.map(item => Object.assign({}, item, { completed: !item.completed }))
        // 改变状态
        this.store$.dispatch({ type: TOGGLE_ALL })
    }

    clearCompleted(): void {
        // 相当于网络请求
        TODOS = TODOS.filter(item => !item.completed);
        // 改变状态
        this.store$.dispatch({ type: CLEAR_COMPLETED })
    }
}