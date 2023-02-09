import React from "react";
import '../css/Footer.css';
import { Link } from "react-router-dom";
import PGImage from "../images/pgimages.png"
import AppImage from "../images/app.png"
import PlayImage from "../images/play.png"
import Linkedin from "../images/linkedinfooter.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import Twitter from "../images/twitter.png"


function Footer(props) {
    return (
        <footer className="Footer">
            <div className="Footersuperior">
                <Link to="/" className="link-home-footer"><img src={props.logo} className="Logo" /></Link>

                <div className="footer-top-center">
                    <h4> MAPA DO SITE </h4>
                    <ul>
                        <Link to="/about"><li>SOBRE</li></Link>
                        <Link to="/products"><li>NOSSOS LIVROS</li></Link>
                        <Link to="/contact"><li>FALE CONOSCO</li></Link>

                    </ul>
                    <h4> Horário de atendimento</h4>
                    <p>Seg a sáb das 09h às 20h</p>
                    <h4> Contato</h4>
                    <p>Telefone: (21) 2018-5869<br />
                        Celular: (21) 99125-1180<br />
                        Email: iraja@rj.senac.br</p>
                </div>
                <div>
                    <img src={PGImage} className="pgimage" />
                    <div className="appicons">
                        <img src={AppImage} className="appimages" />
                        <img src={PlayImage} className="appimages" />
                    </div>
                    <div className="socialicons">
                        <a href="https://www.linkedin.com/"><img src={Linkedin} className="socialimages" /></a>
                        <a href="https://www.facebook.com/"><img src={Facebook} className="socialimages" /></a>
                        <a href="https://www.instagram.com/"><img src={Instagram} className="socialimages" /></a>
                        <a href="https://www.twitter.com/"><img src={Twitter} className="socialimages" /></a>
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