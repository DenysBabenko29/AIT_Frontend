import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


const Form = () => {
 
    const dispatch = useDispatch();

    const [isbn, setIsbn] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    const [author, setAuthor] = useState<string>("");

    const addBook = (): void => {
        if(isbn && title && year && author){
            dispatch({ type: 'books/add', payload:  {isbn, title, year, author}});
        }
        
    }

  return (
    <div className='main'>
    <form className='form' action="">
        <label className="form-label" htmlFor="isbn">ISBN</label>
        <input className="form-control" type="text" id='isbn' onChange={(e) => setIsbn(e.target.value)}/>
        <label className="form-label" htmlFor="title">TITLE</label>
        <input className="form-control" type="text" id='title' onChange={(e) => setTitle(e.target.value)}/>
        <label className="form-label" htmlFor="year">YEAR</label>
        <input className="form-control" type="number" id='year' onChange={(e) => setYear(+(e.target.value))}/>
        <label className="form-label" htmlFor="author">AUTHOR</label>
        <input className="form-control" type="text" id='author' onChange={(e) => setAuthor(e.target.value)}/>
        <button type="button" onClick={addBook}>AddBook</button>
    </form>
    </div>
  )
}

export default Form