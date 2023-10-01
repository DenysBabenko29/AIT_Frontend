import React from "react";
import { useDispatch } from "react-redux";


interface IProps {
    title: string;
    isbn: string;
    year: number;
    author: string;
    index: number;
}

const Item: React.FC<IProps> = ({
    title,
    isbn,
    year,
    author,
    index,
}): JSX.Element => {

 
  const dispatch = useDispatch();
  const deleteBook = (isbn: string): void => {
      dispatch({ type: 'books/delete', payload : isbn})
    };

    return (
        <>
            <p key={index}>
                ISBN: {isbn}, Title: {title}, Year: {year}, Author: {author}
            </p>
            <button type="button" onClick={() => deleteBook(isbn)}>
                Delete
            </button>
        </>
    );
};

export default Item;
