import React from "react";
import { Link } from "react-router-dom";
import "../css/Contact.css"
import checkImg from "../images/check.png"

function MsgSuccess() {


    return (
        <main className=" bgoutcontact">
            <section className="ftco-section pt-5 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 bg-white py-5  border border-dark">
                            <div className="wrapper px-5 text-center">
                                <img src={checkImg} width="120" height="120"/>
                                <h1 className="txtmainhome"> Pagamento realizado com sucesso!</h1>
                                <h3> Sua compra foi efetuada com sucesso e em breve você receberá um email com as informações sobre entrega!</h3>
                                <Link to="/"> <button className="btn-detail mt-3"> Voltar ao início</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MsgSuccess