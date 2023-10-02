import { BookState } from "../book/types/BookState";
import { Action } from "../book/types/Action";

const initialState: BookState = {
    books : []
}

export function bookReducer(
    state: BookState = initialState,
    action: Action
): BookState {
    switch(action.type){
        case 'books/add' : 
            return {books: [...state.books, action.payload]}
        case 'books/delete' : 
            return {...state, books: state.books.filter(x => x.isbn !== action.payload)}
        default: return state;
    }
}