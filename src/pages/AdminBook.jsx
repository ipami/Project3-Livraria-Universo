import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../css/Admin.css";
import axios from "axios";

const Admin = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await blogFetch.get("/book");

      const data = response.data;

      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    await blogFetch.delete(`/book/${id}`);

    const filteredBooks = books.filter((book) => book.id !== id);

    setBooks(filteredBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (

    <div className="admin">
            <h1 className="admin-title">Gerenciar Livros</h1>
      <div className="admin-books">

      {books.length === 0 ? (
        <p><div className="loader"></div></p>
      ) : (
        books.map((book) => (
          <div className="bookbox-admin" key={book.id}>
            <div className="bookaction-admin" key={book.id}>
              <img className="book-image-admin" src={book.image} />
              <h2 className="book-name-admin">{book.name}</h2>
              {/* <p>{book.description}	</p> */}
              <div className="actions">
                <Link className="btn edit-btn" to={`/admin/editbook/${book.id}`}>
                  Editar
                </Link>
                <button className="btn delete-btn" onClick={() => deleteBook(book.id)}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )))}
    </div>
    </div>
  )


};

export default Admin;
