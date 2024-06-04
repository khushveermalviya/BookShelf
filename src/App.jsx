
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Nav.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import BookshelfPage from './Pages/BookShelfPage.jsx';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBooks = localStorage.getItem('bookshelf');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addBookToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage addBook={addBookToBookshelf} />} />
        <Route path="/bookshelf" element={<BookshelfPage books={bookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
