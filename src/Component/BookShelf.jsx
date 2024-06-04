// src/components/Bookshelf.jsx


const BookShelf = ({ books }) => {
  return (
    <div className="flex flex-wrap">
      {books.map((book, index) => (
        <div key={index} className="border rounded p-4 m-4 shadow-lg w-full md:w-1/3 lg:w-1/4">
          <h3 className="font-bold">{book.title}</h3>
          <p>{book.author_name?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
