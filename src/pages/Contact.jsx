import React from "react";
import { Link } from "react-router-dom";


function Contact() {
    return (
    <div>
        <h1>Página de Contato</h1>
        <p>
            <Link to="/contact/1">Forma de Contato 1</Link>
            <Link to="/contact/2">Forma de Contato 3</Link>
            <Link to="/contact/3">Forma de Contato 3</Link>
        </p>
    </div>
    )
}

export default Contact;