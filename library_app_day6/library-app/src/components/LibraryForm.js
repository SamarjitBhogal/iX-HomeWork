import React, { useState } from "react";

export default function LibraryForm(props) {
  const [titleCell, setTitleCell] = useState("");
  const [authorCell, setAuthorCell] = useState("");
  const [isbnCell, setIsbnCell] = useState("");

  function onAddBook(e) {
    e.preventDefault();
    props.onCreateBook(titleCell, authorCell, isbnCell);
    
    setTitleCell('');
    setAuthorCell('');
    setIsbnCell('');
  }

  return (
    <div>
      <form onSubmit={onAddBook}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={titleCell}
            type="text"
            className="form-control"
            onChange={(e) => setTitleCell(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            value={authorCell}
            type="text"
            className="form-control"
            onChange={(e) => setAuthorCell(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            value={isbnCell}
            type="text"
            className="form-control"
            onChange={(e) => setIsbnCell(e.target.value)}
          ></input>
        </div>
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-outline-primary">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
