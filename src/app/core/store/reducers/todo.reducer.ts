import { Reducer, Action } from '@ngrx/store';
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL,
    CLEAR_COMPLETED,
    GET_TODOS,
    MODIFY_TODO
} from '../actions';

export let todoReducer = (state: any[] = [], action: Action) => {
    switch(action.type) {
        case ADD_TODO: 
            console.log(ADD_TODO);
            return [action.payload, ...state];
        case REMOVE_TODO: 
            console.log(REMOVE_TODO);
            return state.filter(todo => todo.id !== action.payload.id);
        case TOGGLE_TODO: 
            console.log(TOGGLE_TODO);
            return state.map(todo => todo.id === action.payload.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo);
        case MODIFY_TODO: 
            console.log(MODIFY_TODO);
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        case TOGGLE_ALL: 
            console.log(TOGGLE_ALL);
            return state.map(todo => Object.assign({}, todo, { completed: !todo.completed }));
        case CLEAR_COMPLETED: 
            console.log(CLEAR_COMPLETED);
            return state.filter(todo => !todo.completed);
        case GET_TODOS: 
            console.log(GET_TODOS);
            return [...action.payload];
        default:
            return state;
    }
}