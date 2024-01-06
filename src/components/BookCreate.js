import { useState, useContext } from "react";
import BooksContext from "../context/books";
import useBooksContext from '../hooks/use-books-context';

function BookCreate () {
    const [title, setTitle] = useState(' ');
    const { handleCreateBook } = useBooksContext();
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        // This event action prevents reloading of screen everytime we submit
        event.preventDefault();
        handleCreateBook(title);
        setTitle(' ');
    }
    return (
        <div className="book-create">
            <h3>ADD A NEW BOOK </h3>
            <form onSubmit={ handleSubmit }>
                <label><b>Title</b></label>
                <input className= "input" value={ title } onChange={ handleChange } />
                <button className="button">CREATE BUTTON</button>
            </form>
        </div>
    );
}

export default BookCreate;