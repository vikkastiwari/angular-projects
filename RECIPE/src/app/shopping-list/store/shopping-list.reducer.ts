import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface ShoppingListState{
    ingredients: Ingredient[];
}

const initialState: ShoppingListState = {
    ingredients: [
        new Ingredient('Apples',10),
        new Ingredient('Chickoo',5),
    ]
}

export function ShoppingListReducer(state:{ ingredients: Ingredient[]; } = initialState, action:ShoppingListActions.AddIngredient): ShoppingListState { // here we specific action that not only export type but also other things as well
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // copied the initial state
                ingredients:[
                    ...state.ingredients /* accessed the ingredients property only that we want to change */, 
                    action.payload
                ]
            }
        default:
            return state;
    }
}