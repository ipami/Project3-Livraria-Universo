import { Link } from "react-router-dom"
import '../css/Login.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import blogFetch from "../axios/config";

function Login() {
    const navigate = useNavigate();

    const [clients, setClients] = useState([]);

    const getClients = async () => {
        try {
            const response = await blogFetch.get("/client");

            const data = response.data;

            setClients(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

    const isAdmin = (e) => {
        e.preventDefault()
        const input = document.getElementById('login')
        const password = document.getElementById('password')
        if (input.value == "admin@admin.com" && password.value == "souadmin") {
            navigate("/admin");
        } else {

            for(let i = 0; i < clients.length; i++){

                if((clients[i].email == input.value || clients[i].login == input.value )&& clients[i].password == password.value ){
                navigate("/logged");
            } else{
                const message = document.getElementById('seminfo')
                message.innerText = "Login ou senha incorretos."
            }
            }

        }

    }


    return (
        <main className="logincontainer">

            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-xl-5 col-md-8 bglogin ">
                            <form className="rounded-2 shadow-5-strong p-5 " id="formLogin">


                                <div className="hddmsg">
                                    <div className="form-outline mb-4">
                                        <p className="error-message" id="seminfo"></p>
                                        <input type="text" id="login" className="form-control inputfield email"
                                            placeholder="Digite seu email ou login" />
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control inputfield pass"
                                            placeholder="Senha" />
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">

                                            <div className="form-check">
                                                <input className="form-check-input checkboxRemember" type="checkbox" value=""
                                                    id="form1Example3" defaultChecked />
                                                <label className="form-check-label remember" htmlFor="form1Example3">
                                                    Lembrar-me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col text-center">
                                            <Link to='/login/forgot'> <p id="forgot">Esqueceu sua senha?</p></Link>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-login recovery"
                                            id="btnsend" onClick={(e)=>{
                                                isAdmin(e)
                                            }}>ENVIAR</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </main >
    )

}

export default Login