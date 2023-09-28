import { createStore, combineReducers } from 'redux'
import counterReducer from './counterReducer';
import sandwichReduser from './sandwichReduser';
export const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReduser
}));


export type RootState = ReturnType<typeof store.getState>;