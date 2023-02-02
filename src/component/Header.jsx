import React from "react";
import { Link } from "react-router-dom";
import '../css/App.css';
import Menu from "./Menu";
import LoupeBlue from "../images/loupe-blue.svg"
import LoginIcon from "../images/iconlogin.png"
import CartIcon from "../images/iconcart.png"


function Header(props) {
    return (
        <header className="Header">
            <Link to="/" className="link-home"><img src={props.logo} className="Logo" /></Link>
            <div className="header-right">
                <div className="header-top">
                    <div className="search-box">
                        <input type="text" className="search-text" placeholder="Pesquisar.." />
                        <a className="search-btn">
                            <img className="loupe-blue" src={LoupeBlue} width="25px" height="25px" />
                        </a>

                    </div>
                   <div className="div-login">
                   <Link to ="/login"><img src={LoginIcon} width="50px" height="50px" className="header-icon"/></Link>
                    <p>Olá, bem vindo(a)!<br/>Faça seu <Link to ="/login"><strong>login</strong></Link></p>
                    </div>

                    <Link to="/cart"><img src={CartIcon}width="50px" height="50px" className="header-icon" /></Link>
                </div>
                <div className="header-bottom">
                    <nav>
                        {Menu(props)}
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header