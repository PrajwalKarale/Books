import { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';
function BookShow ({ book }) {

    const[showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);
    //event handler when the user clicks on the cross button in order to delete a book from the list
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };
    //event handler to edit button
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };
    let content = <h3>{ book.title }</h3>
    if(showEdit) {
        content = <BookEdit onSubmit = { handleSubmit } book = { book } />;
    }
    return(
        <div className="book-show">
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/200/300`} />
            { content }
            <div className="actions">
                <button className= "edit" onClick={ handleEditClick }>
                    EDIT
                </button>
                <button className="delete" onClick={ handleDeleteClick }>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default BookShow;