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


function Header(props) {

    const model = props.model

return (<>{model == 'default'?(
    <header className="Header">
        <Link to="/" className="link-home"><img src={props.logo} className="Logo" /></Link>
        <div className="header-right">
            <div className="header-top">
                <form className="search-box" >
                    <input type="text" className="search-text" name="name" id="name" placeholder="Pesquisar.."
                        onChange={(e) => { setSearch(e.target.value) }} />
                    <button type="submit" className="search-btn" >
                        <img className="loupe-blue" src={LoupeBlue} width="25px" height="25px" />
                    </button>

                </form>
                <div className="div-login">
                    <Link to="/login"><img src={LoginIcon} width="50px" height="50px" className="header-icon" /></Link>
                    <p>Olá, bem vindo(a)!<br />Faça seu <Link to="/login"><strong>login</strong></Link></p>
                </div>

                <Link to="/cart"><img src={CartIcon} width="50px" height="50px" className="header-icon" /></Link>
            </div>
            <div className="header-bottom">
                <nav>
                    {Menu(props)}
                </nav>
            </div>
        </div>
    </header >):( <header className="header-admin">
        <Link to="/" className="link-home-admin"><img src={props.logo} className="logo-admin" /></Link>
        <h1 className="title-header">AMBIENTE DE GERENCIAMENTO</h1>

        <Link to="/" ><h4 className="logout">SAIR</h4></Link>

    </header >)}
    </>
)}

export default (Header)