
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../Component/BookCard.jsx';

const SearchPage = ({ addBook }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        });
    }
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for a book"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onAdd={addBook} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
