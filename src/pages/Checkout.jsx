import React from "react";
import { useCart } from "../component/CartContext";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function CheckOut() {


    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [cpf, setCPF] = useState();
    const [street, setStreet] = useState();
    const [number, setNumber] = useState();
    const [neighborhood, setNeighborhood] = useState();
    const [city, setCity] = useState();
    const [uf, setUF] = useState();
    const [cep, setCep] = useState();


    const createClient = async (e) => {
        e.preventDefault();

        await blogFetch.post("/client", {
            id: '',
            name: name,
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

        clearCart()

        navigate("/success");
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
                setStreet(data.logradouro);
                setNeighborhood(data.bairro);
                setCity(data.localidade);
                setUF(data.uf);

            }
            )


    }


    return (
        <div class="container pt-5 pb-5">

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
                    <form className="needs-validation" onSubmit={(e) => createClient(e)}>
                        <div className="row">
                            <div className="col mb-3">
                                <label htmlFor="primeiroNome">Nome</label>
                                <input onChange={(e) => setName(e.target.value)}  type="text" className="form-control" id="name" required />
                            
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpf">CPF</label>
                            <input onChange={(e) => setCPF(e.target.value)} type="text" className="form-control" id="cpf" required  />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email"  required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel">Telefone</label>
                            <input onChange={(e) => setTel(e.target.value)} type="tel" className="form-control" id="tel" required/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="nickname">Login</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input onChange={(e) => setLogin(e.target.value)} type="text" className="form-control" id="login"  required />

                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Senha</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="senha" required/>

                        </div>
            

                        <div className="mb-3">
                            <div class="row g-3">
                                <label htmlFor="endereco">Endereço</label>
                                <div class="col-sm">
                                    <input onChange={(e) => setCep(e.target.value)} type="number" class="form-control mb-3" placeholder="CEP" onBlur={checkCEP} required/>
                                </div>
                                <div class="col-sm-7">
                                    <input onChange={(e) => setStreet(e.target.value)} type="text" class="form-control" placeholder="Rua, Av., Estrada..." defaultValue={street} />
                                </div>

                                <div class="col-sm">
                                    <input onChange={(e) => setNumber(e.target.value)} type="Number" class="form-control" placeholder="Número" />
                                </div>

                            </div>

                            <div class="row g-3">

                                <div class="col-sm">
                                    <input onChange={(e) => setNeighborhood(e.target.value)} type="text" class="form-control mb-3" placeholder="Bairro" required defaultValue={neighborhood} />
                                </div>
                                <div class="col-sm">
                                    <input onChange={(e) => setCity(e.target.value)} type="text" class="form-control mb-3" placeholder="Cidade" required defaultValue={city} />
                                </div>
                                <div class="col-sm">
                                    <input onChange={(e) => setUF(e.target.value)} type="text" class="form-control" placeholder="Estado" required defaultValue={uf} />
                                </div>

                            </div>


                        </div>


                        <hr className="mb-4" />

                        <h4 className="mb-3">Pagamento</h4>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credito" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                <label className="custom-control-label" htmlFor="credito">Cartão de crédito</label>
                            </div>
                  
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-nome">Nome no cartão</label>
                                <input type="text" className="form-control" id="cc-nome" required />
                                <small className="text-muted">Nome completo, como mostrado no cartão.</small>

                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-numero">Número do cartão de crédito</label>
                                <input type="text" className="form-control" id="cc-numero" required />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label for="pais">Parcelas</label>
                                <select class="custom-select d-block w-100" id="parcelas" required>
                                    <option value="">Escolha...</option>
                                    <option>À vista R${optionParc(1, calcTotal(cart.cart))}</option>
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
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiracao">Data de expiração(MM/AA)</label>
                                <input type="text" className="form-control" id="cc-expiracao" placeholder="" required />

                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
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