import '../css/About.css'
// import { Link } from "react-router-dom";
// import blogFetch from "../axios/config";
// import { useCart } from "../component/CartContext";

const About = () => {

  return (
    <main className="mainAbout">

      <div className="divAbout">
        <h1 className="titleAbout">Sobre nós</h1>
        <br />
        <h3 className="textAbout">Somos a Livraria Universo, acreditamos que livros são a melhor forma de conhecer o passado, de moldar o futuro e aproveitar o presente, por isso, buscamos sempre facilitar o acesso do conhecimento a todos através deles.
          Desde de 1997, nossa livraria vem acompanhando as evoluções tecnológicas e sempre evoluindo junto para que tenhamos acesso aos livros em qualquer canto do universo!
        </h3>
        <br />
        <h1 className="teamAbout">Nossa equipe</h1>
        <br />
        <div className="containerTeamAbout">
          <div class="row row-cols-auto">
            <h1>Paloma</h1>
            <h1>Matheus</h1>
            <h1>Davih</h1>
            <h1>Tiago</h1>
          </div>
        </div>


      </div>


    </main>
  )

}



export default About;