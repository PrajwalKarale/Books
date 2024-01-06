import  { createContext, useState } from 'react';
import axios from 'axios';
const BooksContext = createContext();
function Provider({ children }){
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };
    const editBookById = async (id, newTitle) => {
        // this will give us the latest response object present on the server and which will be used for upodating.
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title:newTitle,
        }); 
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return { ...book, ...response.data };
            }
            return book;
        });

        setBooks(updatedBooks);
    };
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
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

    const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBookById: editBookById,
        handleCreateBook: handleCreateBook,
        fetchBooks: fetchBooks
    };
    return (
        <BooksContext.Provider value={ valueToShare }>
            { children }
        </BooksContext.Provider>       
    );
} 
export { Provider };
export default BooksContext;