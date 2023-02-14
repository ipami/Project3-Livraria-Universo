import '../css/About.css'
import Tiago from '../images/tiago.jpg'
import Davih from '../images/davih.jpg'
import Paloma from '../images/paloma.jpg'
import Matheus  from '../images/matheus.png'

function About(){

  return (
    <main className="mainAbout">

      <div className="divAbout">
        <h1 className="titleAbout">NOSSA HISTÓRIA</h1>
        <br />
        <h3 className="textAbout">Somos a Livraria Universo, acreditamos que livros são a melhor forma de conhecer o passado, de moldar o futuro e aproveitar o presente, por isso, buscamos sempre facilitar o acesso do conhecimento a todos através deles.
          Desde de 1997, nossa livraria vem acompanhando as evoluções tecnológicas e sempre evoluindo junto para que tenhamos acesso aos livros em qualquer canto do universo!
        </h3>
        <br />
        <h1 className="teamAbout">NOSSA EQUIPE</h1>
        <br />
        <div className="containerTeamAbout">

            <div className="equipe">

                <img src={Davih}className="imgIndiv"></img>

              <br />
              <h3 className="nameIndivdual">Davih Mello</h3>
              <a href='https://github.com/DavihMello' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='https://www.linkedin.com/in/davih-de-melo-b4b187147/' target="_blank" className="aSocial">LinkedIn</a>
            </div>



            <div className="equipe">

                <img src={Matheus} className="imgIndiv"/>

              <br />
              <h3 className="nameIndivdual">Matheus Fortunato</h3>
              <a href='https://github.com/FortunaProg' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='https://www.linkedin.com/in/matheus-fortunato-da-silva-b4669a180/' target="_blank" className="aSocial">LinkedIn</a>
            </div>



            <div className="equipe">

                <img src={Paloma} className="imgIndiv"/>

              <br />
              <h3 className="nameIndivdual">Paloma Avelino</h3>
              <a href='https://github.com/ipami' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='https://www.linkedin.com/in/palomaavelino/' target="_blank" className="aSocial">LinkedIn</a>
            </div>



            <div className="equipe">

                <img src={Tiago} className="imgIndiv"/>

              <br />
              <h3 className="nameIndivdual">Tiago Oliveira</h3>
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='www.linkedin.com/in/tiagosantosoliveira97' target="_blank" className="aSocial">LinkedIn</a>
            </div>


        </div>


      </div>


    </main>
  )

}



export default About;