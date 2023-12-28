function BookShow ({ book, onDelete }) {
    //event handler when the user clicks on the cross button in order to delete a book from the list
    const handleClick = () => {
        onDelete(book.id);
    }
    return(
        <div className="book-show">
            { book.title }
            <div className="actions">
                <button className="delete" onClick={ handleClick }>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default BookShow;