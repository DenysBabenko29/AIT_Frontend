import { IBook } from "./IBook";

export type Action =
| { type: 'books/add', payload: IBook }
| { type: 'books/delete', payload: string}
| { type: 'books/editTitle', payload: { isbn: string, title: string } }
