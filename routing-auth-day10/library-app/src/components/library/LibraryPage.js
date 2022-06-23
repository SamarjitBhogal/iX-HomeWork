import React, { useEffect, useState } from "react";

//import LibraryForm Component
import LibraryForm from "./LibraryForm";

// import Table component
import Table from "./Table";

//import Book model
import { Book } from "../../models/Book";

// import library service
import LibraryService from "../../services/library.service";

export default function LibraryPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const books = await LibraryService.readBooks();
    setBooks(books);
  }

  async function onCreateBook(titleCell, authorCell, isbnCell) {
    const book = await LibraryService.createBook(
      new Book(titleCell, authorCell, isbnCell, null)
    );

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
