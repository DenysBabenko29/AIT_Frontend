import { createStore, combineReducers } from 'redux'
import sandwichReducer from './reducer/sandwichReducer';
import counterReducer from './reducer/counterReducer';
import { bookReducer } from './reducer/bookReducer';
export const store = createStore(combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    library: bookReducer
}));


export type RootState = ReturnType<typeof store.getState>;