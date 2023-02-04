import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Products.css'


const Products = () => {

  const [books, setBooks] = useState([])

  const getBooks = async () => {

    try {
      const response = await axios.get('https://pj3-estao-servidos.onrender.com/book')

      const data = response.data;

      console.log(data);

      setBooks(data);

    } catch (error) {
      console.log(error)

    }


  }

  useEffect(() => {

    getBooks()
  }, [])

  const toCorrect= (price) =>{
    return price.replace(".", ",")
  }

  const showParc = (price) => {

    if (typeof price == 'number') {
      const bookPrice = price / 10
      const bookParc = bookPrice.toFixed(2)

      return bookParc.replace(".", ",")
    }
    else {
      const num = Number(price)
      const bookParc = (num / 10).toFixed(2)
      return bookParc.replace(".", ",")
    }
  }

  return (<main>

    <h1 className="title">Nossos Livros</h1>

    <div className="products">
      {books.length === 0 ? (<div className="loader"></div>) : (
        books.map((book) => (
          <div className="product" key={book.id}>
            <img className="product-image" src={book.image} />
            <h4 className="product-name">{book.name}</h4>
            <span className="product-price">R$ {toCorrect(book.price)}</span>
            <span className="product-parc">ou em até 10x de R$ {showParc(book.price)}</span>
            <div className="buttons">
              <Link to={`/products/${book.id}`} className="btn">Ler mais</Link>
              {/* <Link className="btn">Comprar</Link>  */}


              {/* onClick={() => addProductToCart(book)} */}
            </div>
          </div>
        ))
      )}
    </div>
</main>
)}

    export default Products;