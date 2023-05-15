import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient | null,
    editedIngredientIndex: number,
}

export interface AppState {
    ShoppingListState: State
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples',10),
        new Ingredient('Chickoo',5),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1,
}

export function ShoppingListReducer(
    state:State = initialState, 
    action:ShoppingListActions.ShoppingListActions) 
{ // here we specific action that not only export type but also other things as well
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // copied the initial state
                ingredients:[
                    ...state.ingredients /* accessed the ingredients property of old state */, 
                    action.payload /* adding new ingredients */
                ]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients:[
                    ...state.ingredients /* accessed the ingredients property of old state */, 
                    ...action.payload /* adding new ingredient elements - without spread operator it will result in nesting of array => [1,2,3,[]] */
                ]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            // enforces the immutable logic

            const ingredient = state.ingredients[action.payload.index];
            const updateIngredient = {
                ...ingredient, // copied exisiting ingredient
                ...action.payload.ingredient // overrode existing ingredient to new one
            };
            const updateIngredients = [...state.ingredients]; // copied whole existing ingredients array
            updateIngredients[action.payload.index] = updateIngredient; // updated the respective index of ingredient in the array
            
            return {
                ...state,
                ingredients:[]
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((val,i) => { // filter returns new array so eventually it wont update old state
                    return i !== action.payload; // action.payload brings index only
                })
            };
        case ShoppingListActions.START_EDIT:
            return{
                ...state,
                editedIngredient: {...state.ingredients[action.payload]},
                editedIngredientIndex: action.payload,
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1,
            };
        default:
            return state;
    }
}