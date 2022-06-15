import React, { useEffect, useState } from "react";

//import LibraryForm Component
import LibraryForm from "./components/LibraryForm";

// import Table component
import Table from "./components/Table";

//import Book model
import { Book } from "./models/Book";

// import bootstrip icons
import "bootstrap-icons/font/bootstrap-icons.css";

// import library service
import LibraryService from "./services/library.service";
import { async } from "@firebase/util";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const books = await LibraryService.readBooks();
    setBooks(books);
  }

  async function onCreateBook(titleCell, authorCell, isbnCell) {
    const book = await LibraryService.createBook(new Book(
      titleCell,
      authorCell,
      isbnCell,
      null
    ));

    setBooks([...books, book]);
  }

  async function onRemoveBook(bookId) {
    await LibraryService.deleteBook(bookId);
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
