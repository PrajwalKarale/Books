import './index.css';
import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App () {
    const [books, setBooks] = useState([]);

    // Event handler when a Book is created
    const handleCreateBook = (title) => {
        const updatedBooks = [
            ...books,
            { id:Math.round(Math.random()*9999), title }
        ]
        setBooks(updatedBooks);
    };
    return(
        <div className='app'>
            <BookList books={ books } />
            <BookCreate onCreateBook = { handleCreateBook } />
        </div>
    ); 
}

export default App;
