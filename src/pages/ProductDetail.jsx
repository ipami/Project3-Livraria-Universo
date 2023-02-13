import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/ProductDetail.css'
import { useCart } from "../component/CartContext";



function Book () {

  const cart = useCart()




  const add = (product, quantity) =>{
 
    cart.addWithQuantity(product, quantity)
  }

  


  const { id } = useParams();
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const response = await blogFetch.get(`/book/${id}`);

      const data = response.data;

      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="book-detail">
      {!book.name ? (
        <div className="loader-product"></div>
      ) : (
        <div className="book-info-detail">
          <div >
            <img className="book-image-detail" src={book.image} />
          </div>
          <div className="book-data-detail">
            <h1>{book.name}</h1>
            <p>{book.author}</p>
            <p>{book.publishing}</p>

            <p className="description-detail">{book.description}</p>

            <input type="number" className="qtn-book-detail" id="qtn-book-detail" min="1" defaultValue="1" />
            <button className="btn-detail"	onClick= {() => {
              const quantity = document.getElementById("qtn-book-detail")
              add(book, Number(quantity.value))}}>	Adicionar ao carrinho</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
