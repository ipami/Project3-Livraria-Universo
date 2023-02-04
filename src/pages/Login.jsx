import { Link } from "react-router-dom"
import '../css/Login.css'

function Login() {
    return (
        <main className="logincontainer">

            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
 
                        <div className="col-xl-5 col-md-8 bglogin ">
                            <h2 className="text-center text-white msgsucess"></h2>
                            <form className="rounded-2 shadow-5-strong p-5 " id="formLogin">


                                <div className="hddmsg">
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form1Example1" className="form-control inputfield email"
                                            placeholder="E-mail" oninput="emailValidation()" />
                                        <span className="span-email">Digite um email válido. Exemplo: exemplo@exemplo.com</span>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="form1Example2" className="form-control inputfield pass"
                                            placeholder="Senha" />
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">

                                            <div className="form-check">
                                                <input className="form-check-input checkboxRemember" type="checkbox" value=""
                                                    id="form1Example3" checked />
                                                <label className="form-check-label remember" for="form1Example3">
                                                    Lembrar-me
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col text-center">
                                           <Link to ='/login/forgot'> <p id="forgot">Esqueceu sua senha?</p></Link>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-login recovery"
                                            id="btnsend">ENVIAR</button>
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