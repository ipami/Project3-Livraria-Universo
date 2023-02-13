import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/AdminBook.css";
import axios from "axios";





function AdminBook () {
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

    <div className="admin-file">
      <h1 className="admin-title">Gerenciar Livros</h1>
      <div className="admin-books">

        {books.length === 0 ? (
          <div className="loader"></div>
        ) : (
          books.map((book) => (
            <div className="bookbox-admin" key={book.id}>
              <div className="bookaction-admin" key={book.id}>
                <img className="book-image-admin" src={book.image} />
                <h2 className="book-name-admin">{book.name}</h2>
                <div className="actions">
                  <Link  to={`/admin/updatebook/${book.id}`}>
                   <button className="btn edit-btn">Editar</button> 
                  </Link>
                  <button className="btn delete-btn" onClick={() => deleteBook(book.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          )))}
      </div>
      <Link to="/admin"><input type="button" value="Voltar" className="btn-back-book" /></Link>
    </div>
  )


};

export default AdminBook;
