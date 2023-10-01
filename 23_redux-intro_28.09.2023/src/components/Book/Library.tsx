import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Item from "./Item";

const Library: React.FC = (): JSX.Element => {
    const books = useSelector((state: RootState) => state.library.books);

    return (
        <div className="library">
            <h2>Library</h2>
            <div className="books">
                {books &&
                    books.map(({ title, isbn, year, author }, index) => (
                        <Item title={title} isbn={isbn} year={year} author={author} index={index} />
                    ))}
            </div>
        </div>
    );
};

export default Library;
