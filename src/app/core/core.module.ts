import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { todoReducer, todoFilterReducer } from './store/reducers';

@NgModule({
    imports: [
        StoreModule.provideStore({
            todos: todoReducer,
            todoFilter: todoFilterReducer
        })
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if(parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only')
        }
    }
}