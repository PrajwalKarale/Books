import './index.css';
import { useState, useEffect } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App () {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return { ...book, title: newTitle }
            }
            return book;
        });

        setBooks(updatedBooks);
    };
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    }
    // Event handler when a Book is created
    const handleCreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks);
    };
    return(
        <div className='app'>
            <h1>READING LIST</h1>
            <BookList books={ books } onDelete = { deleteBookById } onEdit = { editBookById }/>
            <BookCreate onCreateBook = { handleCreateBook } />
        </div>
    ); 
}

export default App;
