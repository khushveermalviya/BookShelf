// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book, onAdd }) => {
  return (
    <div className="border rounded p-4 m-4 shadow-lg">
      <h3 className="font-bold">{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        onClick={() => onAdd(book)}
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
