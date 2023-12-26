import { useState } from "react";
import BookCreate from './components/BookCreate';
function App () {
    const [books, setBooks] = useState([]);
    // Event handler when a Book is created
    const handleCreateBook = (title) => {
        console.log('Need to add book with: ', title);
    };
    return(
        <div>
            <BookCreate onCreateBook = { handleCreateBook } />
        </div>
    ); 
}

export default App;
