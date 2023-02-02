import React from "react";
import '../css/App.css';




function Home(props) {




    return (
        <div>

            <img src={props.imgbanner} className="imgBannerHome"></img>
            <div>
                <h1 className="txtmainhome">{props.chamada}</h1>
                <div className="SpaceCard">

                    <div className="card">
                        <div className="card-body">
                            <h3>Torto arado</h3>
                        </div>
                        <div className="card-body">
                            <img className="imghome" src="https://lojasaraivanew.vtexassets.com/arquivos/ids/198603-1200-auto?v=638071357137270000&width=1200&height=auto&aspect=true" />
                        </div>
                        <div className="card-body">
                        <h2>R$ 49,90</h2>
                        </div>
                        <button class="btn btn-success">Comprar</button>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3>A hipótese do amor</h3>
                        </div>
                        <div className="card-body">
                            <img className="imghome" src="https://lojasaraivanew.vtexassets.com/arquivos/ids/198348-1200-auto?v=638067920617830000&width=1200&height=auto&aspect=true" />
                        </div>
                        <div className="card-body">
                        <h2>R$ 42,31</h2>
                        </div>
                        <button class="btn btn-success">Comprar</button>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3>Verity</h3>
                        </div>
                        <div className="card-body">
                            <img className="imghome" src="https://lojasaraivanew.vtexassets.com/arquivos/ids/198351-1200-auto?v=638067932803730000&width=1200&height=auto&aspect=true" />
                        </div>
                        <div className="card-body">
                        <h2>R$ 39,90</h2>
                        </div>
                        <button class="btn btn-success">Comprar</button>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3>A garota do lago</h3>
                        </div>
                        <div className="card-body">
                            <img className="imghome" src="https://lojasaraivanew.vtexassets.com/arquivos/ids/198589-1200-auto?v=638070822054100000&width=1200&height=auto&aspect=true" />
                        </div>
                        <div className="card-body">
                            <h2>R$ 9,90</h2>
                        </div>
                        <button class="btn btn-success">Comprar</button>
                    </div>


                </div>
            </div >

        </div >
    )
}

export default Home;