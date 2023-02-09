import '../css/Login.css'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date } from 'yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("O email é obrigatório").email("Email inválido. exemplo@exemplo.com"),
  }).required();

function Forgot() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);

    return (
        <main className="logincontainer">


            <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-md-8 bglogin ">
                            <form onSubmit={handleSubmit(onSubmit)} className="rounded-2 shadow-5-strong p-5" id="formrecv">


                                <h4 className="text-center text-white h4change">Esqueceu a sua senha?</h4>

                                <p className="text-center text-white pchange">Digite o e-mail de recuperação</p>

                                <div className="form-outline mb-4 hddrecovery">
                                    <input {...register("email")} type="email" id="form1Example1" className="form-control inputfield email"
                                        placeholder="E-mail" oninput="emailValidation()" />
                                    <p className="error-message">{errors.email?.message}</p>
                                </div>

                                <div className="row mb-4">


                                    <button type="submit" className="btn btn-primary btn-login recovery" id="btnsend">ENVIAR</button>
                                    <a href="login.html"><button type="button" className="btn btn-primary btnsend return" id="btnsend">VOLTAR</button></a>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>





        </main>
    )

}

export default Forgot;