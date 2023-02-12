import React from "react";
import "../css/Contact.css"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date } from 'yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("Email inválido. exemplo@exemplo.com"),
    subject: yup.string().required("O assunto é obrigatório"),
    message: yup.string().required("Não vai nos enviar uma mensagem? ):").max(500, "Excedido o número de caracteres"),
  }).required();


function Contact() {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data =>{ console.log(data);
    const msg = document.getElementById('form-message-success')
    msg.innerText = 'Mensagem enviada com sucesso! :)'

    }
    



    return (
        <main className=" bgoutcontact">
        <section className="ftco-section pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <div className="row no-gutters border border-dark">
                                <div className="col-md-6 bgformcontact">
                                    <div className="contact-wrap w-100 p-lg-5 p-4">
                                        <h3 className="mb-4 titlecontact">Envie sua mensagem :)</h3>
                                        <div id="form-message-success" className="mb-4 text-success">
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} id="contactForm" name="contactForm" className="contactForm">
                                            <div className="row">
                                                <div className="col-md-12 mt-3 mb-2">
                                                    <div className="form-group">
                                                        <input {...register("name")}type="text" className="form-control " name="name" id="name" placeholder="Nome" />
                                                        <p className="error-message">{errors.name?.message}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  mt-2 mb-2">
                                                    <div className="form-group">
                                                        <input {...register("email")} type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                        <p className="error-message">{errors.email?.message}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mt-2 mb-2">
                                                    <div className="form-group">
                                                        <input {...register("subject")}type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" />
                                                        <p className="error-message">{errors.subject?.message}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  mt-2 mb-3">
                                                    <div className="form-group">
                                                        <textarea {...register("message")}name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Digite sua mensagem... :)"></textarea>
                                                        <p className="error-message">{errors.message?.message}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-success"> Enviar Mensagem</button>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch bg-contact">
                                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                                        <h3 className="titlecontact mb-3">Contate-nos!</h3>
                                        <p className="mb-4">Estamos abertos para sugestões ou apenas para bater um papo e tomar um café.</p>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                            </div>
                                            <p className="ms-2"><span className="fw-semibold">Endereço:</span> R. Emíliano Felipe, 173 - Irajá, Rio de Janeiro - RJ, 21230-145</p>

                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                                                </svg>
                                            </div>

                                            <p className="mt-3 ms-2"><span className="fw-semibold">Telefone:</span> (21) 2018-5869 </p>

                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                                </svg>
                                            </div>

                                            <p className="mt-3 ms-2"><span className="fw-semibold"> Email: </span>iraja@rj.senac.br</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>

    )
}

export default Contact