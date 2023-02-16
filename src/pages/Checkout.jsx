import React from "react";
import { useCart } from "../component/CartContext";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, date } from 'yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().min(3 ,"O nome precisa ter no mínimo 3 caracteres").required("O nome é obrigatório"),
    cpf: yup.string().min(11 ,"Hm... A quantidade de dígitos do CPF está correta? Um CPF possui 11 dígitos").max(11 ,"Hm... A quantidade de dígitos do CPF está correta? Um CPF possui 11 dígitos").required("O CPF é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("Email inválido. exemplo@exemplo.com"),
    tel: yup.string().required("O número de telefone é obrigatório"),
    login: yup.string().required("O login é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
    cep: yup.string().max(8 ,"Hm... A quantidade de dígitos do CEP está correta? Um CEP possui 8 dígitos"),
    number: yup.string().required("O número da residência é obrigatório"),
    namecard: yup.string().required("Informe o nome presente no cartão"),
    numbercard: yup.string().required("Informe o número do cartão"),
    data: yup.string().required("Informe a data de expiração do cartão"),
    cvv: yup.string().required("Informe o código de verificação do cartão"),
  }).required();


function CheckOut () {


    const navigate = useNavigate();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data =>{ console.log(data)
        


        clearCart()
        createClient()
        navigate("/success");
    };


    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [cpf, setCpf] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [neighborhood, setNeighborhood] = useState();
    const [city, setCity] = useState();
    const [uf, setUf] = useState();
    const [cep, setCep] = useState();

    const createClient = async () => {
 

        await blogFetch.post("/client", {
            id: '',
            name: nome,
            email: email,
            tel: tel,
            login: login,
            password: password,
            cpf: cpf,
            street: street,
            number: number,
            neighborhood: neighborhood,
            city: city,
            uf: uf,
            cep: cep
        });

    };



    const cart = useCart()
    const add = (product) => {
        cart.addToCart(product)
    }

    const toCorrect = (price) => {
        return price.replace(".", ",")
    }

    const multiply = (price, mult) => {
        const calc = Number(price * mult)
        return calc.toFixed(2)
    }


    const remove = (id) => {
        cart.removeFromCart(id)
    }

    const clearCart = () => {
        Object.keys(cart.cart).map((key) => {
            const { product, quantity } = cart.cart[key]
            remove(key)

        })
    }


    const calcTotal = (items) => {
        let soma = 0;
        Object.keys(cart.cart).map((key) => {
            const { product, quantity } = cart.cart[key]
            soma += Number(multiply(product.price, quantity))

        })
        return soma.toFixed(2).replace(".", ",")

    }

    const optionParc = (parc, value) => {
        const priceTotal = Number(value.replace(",", "."))
        const parcValue = priceTotal / parc
        return parcValue.toFixed(2).replace(".", ",")


    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("street").value = data.logradouro
                document.getElementById("neighborhood").value = data.bairro
                document.getElementById("city").value = data.localidade
                document.getElementById("uf").value =data.uf

            }
            )


    }


    return (
        <div className="container pt-5 pb-5">

            <div className="row">
                <div className="col-md-4 order-md-2 mb-4 mt-5">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted txt-black">Seu carrinho</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">

                        {Object.keys(cart.cart).map((key) => {
                           
                            const { product, quantity } = cart.cart[key]
                            
                            return (
                                <li className="list-group-item d-flex justify-content-between lh-condensed" key={key} >
                                    <div>
                                        <h6 className="my-0">{product.name}</h6>
                                        <small className="text-muted">{product.author}</small>
                                    </div>

                                    <span className="text-muted">R${toCorrect(product.price)} x {quantity} = R${toCorrect(multiply(product.price, quantity))} </span>

                                </li>
                            )
                        })}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (BRL)</span>
                            <strong>{calcTotal(cart.cart)}</strong>
                        </li>
                    </ul>


                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3 txtmainhome mb-5">Formulário de Compra</h4>
                    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="primeiroNome">Nome</label>
                                <input {...register("name")}  type="text" className="form-control" id="name" onChange={(e) => setNome(e.target.value)}/>
                                <p className="error-message">{errors.name?.message}</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpf">CPF</label>
                            <input {...register("cpf")} type="text" className="form-control" id="cpf"  onChange={(e) => setCpf(e.target.value)} />
                            <p className="error-message">{errors.cpf?.message}</p>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input {...register("email")} type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                            <p className="error-message">{errors.email?.message}</p>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel">Telefone</label>
                            <input {...register("tel")} type="tel" className="form-control" id="tel" onChange={(e) => setTel(e.target.value)}/>
                            <p className="error-message">{errors.tel?.message}</p>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="nickname">Login</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input {...register("login")} type="text" className="form-control" id="login"onChange={(e) => setLogin(e.target.value)}  />
                                <p className="error-message">{errors.login?.message}</p>

                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Senha</label>
                            <input {...register("password")} type="password" className="form-control" id="senha" onChange={(e) => setPassword(e.target.value)}/>
                            <p className="error-message">{errors.password?.message}</p>

                        </div>
            

                        <div className="mb-3">
                            <div className="row g-3">
                                <label htmlFor="endereco">Endereço</label>
                                <div className="col-sm">
                                    <input {...register("cep")} type="text" className="form-control mb-3" placeholder="CEP" onBlur={checkCEP}  onChange={(e) => setCep(e.target.value)} />
                                    <p className="error-message">{errors.cep?.message}</p>
                                </div>
                                <div className="col-sm-7">
                                    <input {...register("street")} type="text" className="form-control" id="street" placeholder="Rua, Av., Estrada..."  onFocus={(e) => setStreet(e.target.value)}/>
                                    <p className="error-message">{errors.street?.message}</p>
                                </div>

                                <div className="col-sm">
                                    <input {...register("number")} type="Number" className="form-control" placeholder="Número" onFocus={(e) => setNumber(e.target.value)} />
                                    <p className="error-message">{errors.number?.message}</p>
                                </div>

                            </div>

                            <div className="row g-3">

                                <div className="col-sm">
                                    <input {...register("neighborhood")} type="text" className="form-control mb-3" id="neighborhood" placeholder="Bairro"  onFocus={(e) => setNeighborhood(e.target.value)} />
                                    <p className="error-message">{errors.neighborhood?.message}</p>
                                </div>
                                <div className="col-sm">
                                    <input {...register("city")} type="text" className="form-control mb-3" id="city" placeholder="Cidade" onFocus={(e) => setCity(e.target.value)} />
                                    <p className="error-message">{errors.city?.message}</p>
                                </div>
                                <div className="col-sm">
                                    <input {...register("uf")}  type="text" className="form-control" id="uf" placeholder="Estado" onFocus={(e) => setUf(e.target.value)} />
                                    <p className="error-message">{errors.uf?.message}</p>
                                </div>

                            </div>


                        </div>


                        <hr className="mb-4" />

                        <h4 className="mb-3">Pagamento</h4>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credito" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label" htmlFor="credito">Cartão de crédito</label>
                            </div>
                  
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-nome">Nome no cartão</label>
                                <input {...register("namecard")} type="text" className="form-control" id="cc-nome" />
                                <p className="error-message">{errors.namecard?.message}</p>
                                <small className="text-muted">Nome completo, como mostrado no cartão.</small>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-numero">Número do cartão de crédito</label>
                                <input {...register("numbercard")} type="text" className="form-control" id="cc-numero" />
                                <p className="error-message">{errors.numbercard?.message}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="parc">Parcelas</label>
                                <select {...register("parc")} className="custom-select d-block w-100" id="parc">
                                    
                                    <option selected>À vista R${optionParc(1, calcTotal(cart.cart))}</option>
                                    <option>2x de R${optionParc(2, calcTotal(cart.cart))}</option>
                                    <option>3x de R${optionParc(3, calcTotal(cart.cart))}</option>
                                    <option>4x de R${optionParc(4, calcTotal(cart.cart))}</option>
                                    <option>5x de R${optionParc(5, calcTotal(cart.cart))}</option>
                                    <option>6x de R${optionParc(6, calcTotal(cart.cart))}</option>
                                    <option>7x de R${optionParc(7, calcTotal(cart.cart))}</option>
                                    <option>8x de R${optionParc(8, calcTotal(cart.cart))}</option>
                                    <option>9x de R${optionParc(9, calcTotal(cart.cart))}</option>
                                    <option>10x de R${optionParc(10, calcTotal(cart.cart))}</option>

                                </select>
                                <p className="error-message">{errors.parc?.message}</p>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="data">Data de expiração(MM/AA)</label>
                                <input {...register("data")}  type="text" className="form-control" id="data"  />
                                <p className="error-message">{errors.data?.message}</p>

                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cvv">CVV</label>
                                <input {...register("cvv")} type="text" className="form-control" id="cvv"  />
                                <p className="error-message">{errors.cvv?.message}</p>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-success btn-lg btn-block" type="submit" >Finalizar Compra</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default CheckOut;