import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import '../css/Home.css';
import blogFetch from "../axios/config";
import { useCart } from "../component/CartContext";



function Home(props) {

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



    return (

        <div className="home-main">
            <img src={props.imgbanner} className="imgBannerHome"></img>
            <div>
                <h1 className="txtmainhome">{props.chamada}</h1>
                <div className="SpaceCard">


                    <div className="products-home">
                        {books.length === 0 ? (<div className="loader"></div>) : (
                            books.slice(0, 3).map((book) => (
                                <div className="product-home" key={book.id}>
                                    <img className="product-image-home" src={book.image} />
                                    <h4 className="product-name-home">{book.name}</h4>
                                    <span className="product-price-home">R$ {toCorrect(book.price)}</span>
                                    <span className="product-parc-home">ou em até 10x de R$ {showParc(book.price)}</span>
                                    <div className="buttons-home">
                                        <Link to={`/products/${book.id}`} className="btn-home">Ler mais</Link>
                                        <button className="btn-home bg-success border-0" onClick= {() => add(book)}>Comprar</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div >

        </div >
    )
}

export default Home;