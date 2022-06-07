import React, { useState } from "react";

//import LibraryForm Component
import LibraryForm from "./components/LibraryForm";

// import Table component
import Table from "./components/Table";

//import Book model
import { Book } from "./models/Book";

// import bootstrip icons
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const [books, setBooks] = useState([]);

  function onCreateBook(titleCell, authorCell, isbnCell) {
    const book = new Book(
      titleCell,
      authorCell,
      isbnCell,
      new Date().getTime()
    );

    setBooks([...books, book]);
  }

  function onRemoveBook(bookId) {
    const newBooks = books.filter((book) => book.id !== bookId);
    setBooks(newBooks);
  }

  return (
    <div className="container">
      <div className="card p-4 my-5">
        <h1>Library</h1>
        <LibraryForm onCreateBook={onCreateBook} />
        <Table onRemoveBook={onRemoveBook} books={books} />
      </div>
    </div>
  );
}
