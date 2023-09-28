import React from 'react'
import { SandwichState } from './sandwich/types/SandwichState'
import { Action } from './sandwich/types/Action'

const initialState: SandwichState = {
    value: []
};

export default function sandwichReduser(state: SandwichState = initialState, action: Action): SandwichState {
    switch(action.type){
        case 'addBread' : 
            return {...state, value: [...state.value, "Хлеб"],};
        case 'addCheese' :
            return {...state, value:[...state.value, "Сыр"]};
        case 'addSausage' :
            return {...state, value:[...state.value, "Колбаса"]};
        default : return state;
    }

}
