// src/pages/BookshelfPage.jsx
import React from 'react';
import Bookshelf from '../Component/BookShelf.jsx';

const BookShelfPage = ({ books }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookShelfPage;
