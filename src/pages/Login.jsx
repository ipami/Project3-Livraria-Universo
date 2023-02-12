import { Link } from "react-router-dom"
import '../css/Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const isAdmin = () => {
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const action = document.getElementById('formLogin')
        if (email.value == "admin@admin.com" && password.value == "souadmin") {
            navigate("/admin");
        } else {
            navigate("/logged");
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
                                        <input type="email" id="email" className="form-control inputfield email"
                                            placeholder="E-mail" />
                                        <span className="span-email">Digite um email válido. Exemplo: exemplo@exemplo.com</span>
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
                                            id="btnsend" onClick={()=>{
                                                isAdmin()
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