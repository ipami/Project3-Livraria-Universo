import { Link } from "react-router-dom"

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

                                        <button type="submit" className="btn btn-primary btnsend recovery"
                                            id="btnsend">ENVIAR</button>
                                    </div>
                                </div>
                            </form>

                            {/* <hr id="whiteline" className="hddline"/>

                        <div className="hddop">

                            <div className="d-flex flex-column mb-3 options justify-content-center ">
                                <div className="d-flex flex-row mb-3 align-self-center  group">
                                    <img src="../images/googlelogo.png" className="ac-logo align-self-center"/>
                                    <p className="txt-op align-self-center">Entre com Google</p>
                                </div>
                                <div className="d-flex flex-row mb-3 align-self-center group">
                                    <img src="../images/fclogo.png" className="ac-logo align-self-center"/>
                                    <p className="txt-op align-self-center">Entre com Facebook</p>
                                </div>
                                <div className="d-flex flex-row align-self-center group">
                                    <img src="../images/inlogo.png" className="ac-logo align-self-center"/>
                                    <p className="txt-op align-self-center">Entre com Linkedin</p>

                                </div>

                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>


    </main >
    )

}

export default Login