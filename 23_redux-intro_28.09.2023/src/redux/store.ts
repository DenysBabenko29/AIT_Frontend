import { createStore, combineReducers } from 'redux'
import sandwichReducer from './reducer/sandwichReducer';
import counterReducer from './reducer/counterReducer';
export const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer
}));


export type RootState = ReturnType<typeof store.getState>;