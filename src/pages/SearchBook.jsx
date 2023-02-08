import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import '../css/Products.css';
import blogFetch from "../axios/config";
import { useCart } from "../component/CartContext";

function SearchBook() {

    const cart = useCart()
    const add = (product) =>{
      cart.addToCart(product)
    }

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
          const response = await blogFetch.get("/book");
          const data = response.data;
    
          setBooks(data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {

        getBooks()
    }, [])


    const toCorrect = (price) => {
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

    const filter = (item) => {

        if (sessionStorage.namesearch == undefined || sessionStorage.namesearch == '') {
            return (<h2>Nenhuma busca foi realizada</h2>)

        } else if (sessionStorage.namesearch !== '') {
            const search = sessionStorage.namesearch.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")

            const bookname = item.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")

            if (bookname.includes(search)) {
                console.log(`Encontrado o livro ${item}`)
                console.log(true)
                return "Encontrado"
            } else {
                console.log(false)
                return "Nada encontrado"
            }


        }
    }

    return (
        <main className="mainproducts">
            <div className="products">
                <h1 className="titlesearch"> Exibindo resultados para: "{sessionStorage.namesearch}"</h1>
                <div className="products">
                    {books.length === 0 ? (<div className="loader"></div>) : (

                        (books.map((book) => ((
                            filter(book.name) == "Encontrado" || filter(book.author) == "Encontrado"  || filter(book.publishing) == "Encontrado"? (
                                <div className="product" key={book.id}>
                                    <img className="product-image" src={book.image} />
                                    <h4 className="product-name">{book.name}</h4>
                                    <span className="product-price">R$ {toCorrect(book.price)}</span>
                                    <span className="product-parc">ou em até 10x de R$ {showParc(book.price)}</span>
                                    <div className="buttons">
                                        <Link to={`/products/${book.id}`} className="btn">Ler mais</Link>
                                        <button className="btn bg-success" onClick= {() => add(book)}>Comprar</button>
                                    </div>
                                </div>

                            ) : (null))))))

                    }
                </div>

            </div>
        </main>)



}


export default SearchBook