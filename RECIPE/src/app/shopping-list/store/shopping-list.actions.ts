import { Action } from '@ngrx/store';

import { Ingredient } from './../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action { // The action interface only forces to add type property
    readonly type = ADD_INGREDIENT; // readonly attribute 
    constructor(public payload: Ingredient){}
}