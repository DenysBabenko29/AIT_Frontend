// import React from 'react'
import { SandwichState } from '../sandwich/types/SandwichState'
import { Action } from '../sandwich/types/Action'

const initialState: SandwichState = {
    value: []
};

export default function sandwichReducer(state: SandwichState = initialState, action: Action): SandwichState {
    switch(action.type){
        case 'addIngredient' : 
            return {...state, value: [...state.value, action.payload]};
        case 'clear' : 
        return {...state, value: []}
        default : return state;
    }

}
