import { Link } from "react-router-dom"
import '../css/Login.css'
import { useNavigate } from "react-router-dom";

function Logged() {



    return (
        <main className="logincontainer">

            <div className="mask d-flex align-items-center h-100">
                <div className="container bg-black">
                    <div className="row text-center">
                        <h1 className="text-white pt-3 pb-3"> Usuário logado com sucesso!</h1>


                    </div>
                </div>
            </div>
        </main>
    )

}

export default Logged