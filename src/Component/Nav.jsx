// src/components/Navbar.jsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Search Books</Link></li>
        <li><Link to="/bookshelf">My Bookshelf</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
