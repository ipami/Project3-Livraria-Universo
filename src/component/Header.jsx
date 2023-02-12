import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import '../css/Header.css';
import Menu from "./Menu";
import LoupeBlue from "../images/loupe-blue.svg"
import LoginIcon from "../images/iconlogin.png"
import CartIcon from "../images/iconcart.png"
import { useNavigate } from 'react-router-dom';
import { useCart } from "./CartContext";


function Header(props) {
    const navigate = useNavigate();

    const cart = useCart()
    const itemsCount = Object.keys(cart.cart).reduce((prev, curr) =>{
        return prev + cart.cart[curr].quantity
    }, 0)

    const model = props.model


    const [search, setSearch] = useState("")


    return (<>{model == 'default' ? (
        <header className="Header">
            <Link to="/" className="link-home"><img src={props.logo} className="Logo" /></Link>
            <div className="header-right">
                <div className="header-top">
                    <form className="search-box"  onSubmit={(e) => {

                        sessionStorage.setItem('namesearch', search)
                        navigate("/search");

                    }}>
                        <input type="text" className="search-text" id="namesearch" placeholder="Pesquisar.."
                            onChange={(e) => { setSearch(e.target.value) }} />
                        <button type="submit" className="search-btn"  >
                            <img className="loupe-blue" src={LoupeBlue} width="25px" height="25px" />
                        </button>

                    </form>
                    <div className="div-login">
                    <button className="btn-cart"><Link to="/login"><img src={LoginIcon} width="50px" height="50px" className="header-icon" /></Link>
                        <p className=" pt-2">Olá, bem vindo(a)!<br />Faça seu <Link to="/login"><strong>login</strong></Link></p></button>
                    </div>

                    <Link to="/cart"><button className="btn-cart"><img src={CartIcon} width="50px" height="50px" className="header-icon text-sucess" />{ itemsCount >0 && <span>({itemsCount})</span>}</button></Link>
                </div>
                <div className="header-bottom">
                    <nav>
                        {Menu(props)}
                    </nav>
                </div>
            </div>
        </header >) : (<header className="header-admin">
            <Link to="/admin" className="link-home-admin"><img src={props.logo} className="logo-admin" /></Link>
            <h1 className="title-header">AMBIENTE DE GERENCIAMENTO</h1>

            <Link to="/" ><h4 className="logout">SAIR</h4></Link>

        </header >)}
    </>
    )
}

export default Header