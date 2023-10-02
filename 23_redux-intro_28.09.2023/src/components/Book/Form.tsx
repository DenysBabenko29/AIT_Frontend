import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


const Form = () => {
 
    const dispatch = useDispatch();

    const [isbn, setIsbn] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const addBook = (): void => {
        if(isbn && title && year && author){
            dispatch({ type: 'books/add', payload:  {isbn, title, year: +year, author}});
        }
    }

    const clear = () => {
      setIsbn("");
      setAuthor("");
      setTitle("");
      setYear("")
    }

  return (
    <div className='main'>
    <form className='form' action="">
        <label className="form-label" htmlFor="isbn">ISBN</label>
        <input value={isbn} className="form-control" type="text" id='isbn' onChange={(e) => setIsbn(e.target.value)}/>
        <label className="form-label" htmlFor="title">TITLE</label>
        <input value={title} className="form-control" type="text" id='title' onChange={(e) => setTitle(e.target.value)}/>
        <label className="form-label" htmlFor="year">YEAR</label>
        <input value={year} className="form-control" type="number" id='year' onChange={(e) => setYear(e.target.value)}/>
        <label className="form-label" htmlFor="author">AUTHOR</label>
        <input value={author} className="form-control" type="text" id='author' onChange={(e) => setAuthor(e.target.value)}/>
        <button type="button" onClick={addBook}>AddBook</button>
        <button type="button" onClick={clear}>Clear</button>
    </form>
    </div>
  )
}

export default Form