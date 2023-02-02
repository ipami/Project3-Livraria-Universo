import React from "react";
import '../css/App.css';
import { Link } from "react-router-dom";
import PGImage from "../images/pgimages.png"
import AppImage from "../images/app.png"
import PlayImage from "../images/play.png"

function Footer(props) {
    return (
        <footer className="Footer">
            <div className="Footersuperior">
                <Link to="/" className="link-home-footer"><img src={props.logo} className="Logo" /></Link>

                <div className="footer-top-center">
                    <h4> MAPA DO SITE </h4>
                    <ul>
                        <Link to="/about"><li>SOBRE NÓS</li></Link>
                        <Link to="/products"><li>NOSSOS LIVROS</li></Link>
                        <Link to="/contact"><li>FALE CONOSCO</li></Link>

                    </ul>
                    <h4> Horário de atendimento</h4>
                    <p>Seg a sáb das 09h às 20h</p>
                    <h4> Contato</h4>
                    <p>Telefone: (21) 2018-5869<br/>
                        Celular: (21) 99125-1180<br/>
                        Email: iraja@rj.senac.br</p>
                </div>
                <div>
                    <img src={PGImage} className="pgimage" />
                    <div className="appicons">
                        <img src={AppImage} className="appimages"/>
                        <img src={PlayImage} className="appimages" />
                    </div>
                </div>
            </div>
            <div className="Footerinferior">
                <p>© 2023 Livraria Universo. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;