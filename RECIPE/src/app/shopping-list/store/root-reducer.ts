import { ActionReducerMap } from '@ngrx/store';

import { ShoppingListState,  ShoppingListReducer } from './shopping-list.reducer';

export interface AppState {
    shoppingList: ShoppingListState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: ShoppingListReducer
};