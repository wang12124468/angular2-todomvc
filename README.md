# Angular2-ngrx-todomvc

这个项目是基于angular2的todomvc的实现，主要使用了ngrx技术。TodoMVC是[Redux](http://redux.js.org/)上的示例，Redux是一套状态管理方案的实现。本项目使用ngrx实现了angular2是的TodoMVC。

## 说明

本项目没有使用真的网络服务，只是在todos.service.ts文件中声明了一个变量来模拟网络服务的，如有需要可以自行修改。



        // 这个相当于从网络上获取到的数据  
        let TODOS = [{
            id: 0,
            desc: '测试',
            completed: false
        }];


        addTodo(desc: string): void { 
            let newTodo = {  
                id: ++id,  
                desc: desc,  
                completed: false  
            };
            // 相当于网络请求  
            TODOS.push(Object.assign({}, newTodo));  
            // 改变状态  
            this.store$.dispatch({ type: ADD_TODO, payload: newTodo });  
        }
## 扩展

基于angular2 + ngrx + express + mysql的前后端分离的示例：[angular2 with server](https://github.com/wang12124468/angular2-with-server)
