import React from "react";
import '../css/App.css';
import { Link } from "react-router-dom";

function Menu(props) {

    if (props.model == 'default') {
        return (

            <ul className="Menu">
                <Link to="/about"><li>SOBRE NÓS</li></Link>
                <Link to="/products"><li>NOSSOS LIVROS</li></Link>
                <Link to="/contact"><li>FALE CONOSCO</li></Link>
                <li>        </li>

            </ul>
        )
    } else {
        return (
            <ul className="Menu">
                <Link to="/logout"><li>Sair</li></Link>

            </ul>
        )
    }
}

export default Menu;