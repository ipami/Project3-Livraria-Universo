import React from "react";
import '../css/App.css';


function Home(props) {
    return (
        <div>

            <img src={props.imgbanner} className="imgBannerHome"></img>
            <div>
                <h1 className="txtmainhome">{props.chamada}</h1>
                <div className="SpaceCard">

                    <div className="card c1">
                        <h3>PRODUTO 1</h3>
                        <p>Imagem</p>
                        <h3>R$ 000,00</h3>
                    </div>
                    <div className="card c2">
                        <h3>PRODUTO 1</h3>
                        <p>Imagem</p>
                        <h3>R$ 000,00</h3>
                    </div>
                    <div className="card c3">
                        <h3>PRODUTO 1</h3>
                        <p>Imagem</p>
                        <h3>R$ 000,00</h3>
                    </div>
                    <div className="card c4">
                        <h3>PRODUTO 1</h3>
                        <p>Imagem</p>
                        <h3>R$ 000,00</h3>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Home;