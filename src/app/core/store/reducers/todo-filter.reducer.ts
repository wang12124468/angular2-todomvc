import { Reducer, Action } from '@ngrx/store';
import { VisibilityFilters } from '../actions';

export function todoFilterReducer(state = (todo) => todo, action: Action) {
    switch (action.type) {
        case VisibilityFilters.SHOW_ALL:
            console.log(VisibilityFilters.SHOW_ALL)
            return todo => todo;
        case VisibilityFilters.SHOW_ACTIVE:
            console.log(VisibilityFilters.SHOW_ACTIVE)
            return todo => !todo.completed;
        case VisibilityFilters.SHOW_COMPLETED:
            console.log(VisibilityFilters.SHOW_COMPLETED);
            return todo => todo.completed;
        default:
            return state;
    }
}