import { Action } from '@ngrx/store';

import { Ingredient } from './../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action { // The action interface only forces to add type property & payload is customizable
    readonly type = ADD_INGREDIENT; // readonly attribute 
    constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action { // The action interface only forces to add type property & payload is customizable
    readonly type = ADD_INGREDIENTS; // readonly attribute 
    constructor(public payload: Ingredient[]){}
}

export class UpdateIngredient implements Action { // The action interface only forces to add type property & payload is customizable
    readonly type = UPDATE_INGREDIENT; // readonly attribute 
    constructor(public payload: {index:number,ingredient:Ingredient}){}
}

export class DeleteIngredient implements Action { // The action interface only forces to add type property & payload is customizable
    readonly type = DELETE_INGREDIENT; // readonly attribute 
    constructor(public payload: number){}
}

export class StartEdit implements Action {
    readonly type = 'START_EDIT';
    constructor(public payload:number){}
}

export class StopEdit implements Action {
    readonly type = 'STOP_EDIT';
}

// type definations for union of actions 
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit; 