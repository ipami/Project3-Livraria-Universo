import '../css/About.css'

function About(){

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
          {/* <div class="row row-cols-auto"> */}
            {/* Team 1 */}
            <div className="equipe">
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" >
                <img src="https://avatars.githubusercontent.com/u/113737079?v=4" className="imgIndiv"></img>
              </a>
              <br />
              <h1 className="nameIndivdual">Davih Mello</h1>
              <a href='https://github.com/DavihMello' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='www.linkedin.com/in/tiagosantosoliveira97' target="_blank" className="aSocial">LinkedIn</a>
            </div>

            {/* Team 2 */}

            <div className="equipe">
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" >
                <img src="https://avatars.githubusercontent.com/u/113737079?v=4" className="imgIndiv"></img>
              </a>
              <br />
              <h1 className="nameIndivdual">MAtheus Rasta</h1>
              <a href='https://github.com/FortunaProg' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='www.linkedin.com/in/tiagosantosoliveira97' target="_blank" className="aSocial">LinkedIn</a>
            </div>

            {/* Team 3 */}

            <div className="equipe">
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" >
                <img src="https://avatars.githubusercontent.com/u/113737079?v=4" className="imgIndiv"></img>
              </a>
              <br />
              <h1 className="nameIndivdual">Paloma Avelino</h1>
              <a href='https://github.com/ipami' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='www.linkedin.com/in/tiagosantosoliveira97' target="_blank" className="aSocial">LinkedIn</a>
            </div>

            {/* Team 4 */}

            <div className="equipe">
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" >
                <img src="https://avatars.githubusercontent.com/u/113737079?v=4" className="imgIndiv"></img>
              </a>
              <br />
              <h1 className="nameIndivdual">Tiago Oliveira</h1>
              <a href='https://github.com/Tiago-S-Oliveira' target="_blank" className="aSocial">GitHub</a>
              <br />
              <br />
              <a href='www.linkedin.com/in/tiagosantosoliveira97' target="_blank" className="aSocial">LinkedIn</a>
            </div>

          {/* </div> */}
        </div>


      </div>


    </main>
  )

}



export default About;