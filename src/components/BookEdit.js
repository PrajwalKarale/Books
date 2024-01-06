import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit ({ book, onSubmit }){
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);
    // even handler for whenever a change occurs in input tag
    const handleChange =  (event) => {
        setTitle(event.target.value);
    };

    //event handler whenever the user presses the submit button after the edit
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('New Title is: ', title)
        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <div>
            <form className="book-edit" onSubmit={ handleSubmit }>
                <label>Title</label>
                <input className="input"  value={title} onChange={ handleChange }/>
                <button className=" button is-primary">
                    SAVE
                </button>
            </form>
        </div>
    );
}

export default BookEdit;