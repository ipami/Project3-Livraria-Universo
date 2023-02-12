import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../component/CartContext";
import Products from "./Products";


function ShoppingCart() {

	const cart = useCart()
	const add = (product) => {
		cart.addToCart(product)
	}


	const changeQuantity = (id) => (evt) => {
		cart.changeQuantity(id, Number(evt.target.value))
	}
	const remove = (id) => {
		cart.removeFromCart(id)
	}

	const toCorrect = (price) => {
		return price.replace(".", ",")
	}

	const multiply = (price, mult) => {
		const calc = Number(price * mult)
		return calc.toFixed(2)
	}

	const calcTotal = (items) => {
		let soma = 0;
		console.log(soma)
		console.log(items)
		Object.keys(cart.cart).map((key) => {
			const { product, quantity } = cart.cart[key]
			soma += Number(multiply(product.price, quantity))
			console.log(soma)
		})
		return soma.toFixed(2).replace(".", ",")

	}

	return (<main className="flex-fill">
		<div className="container">
			<h1 className="title mt-4">Carrinho de Compras</h1>
			<ul className="list-group mb-3">
				{Object.keys(cart.cart).map((key) => {
					const { product, quantity } = cart.cart[key]


					return (
						<li className="list-group-item py-3" key={key}>
							<div className="row g-3">
								<div className="col-4 col-md-3 col-lg-2">

									<img src={product.image} className="img-thumbnail" />

								</div>
								<div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
									<h4>
										<b className="text-decoration-none text-dark">
											{product.name.toUpperCase()}</b>
									</h4>
									<h5>
										{product.author}
									</h5>
									<h5>
										{product.publishing}
									</h5>
								</div>
								<div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
									<div className="input-group">

										<input type="number" className="form-control border-dark text-center" id={product.id} defaultValue={quantity} min="1" onClick={changeQuantity(key)} />

										<button className="btn btn-outline-danger border-dark btn-sm" type="button" onClick={() => { remove(key) }} >
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
												<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
											</svg>
										</button>
									</div>
									<div className="text-end mt-2">
										<small className="text-secondary">Valor unitário: R$ {toCorrect(product.price)}</small><br />
										<span className="text-dark">Valor: R$ <div className="prices">{multiply(product.price, quantity).replace(".", ",")}</div></span>
									</div>
								</div>
							</div>
						</li>
					)
				})}
				<li className="list-group-item py-3">
					<div className="text-end">
						<h4 className="text-dark mb-1">
							Valor Total: R$ {calcTotal(cart.cart)}
						</h4>
						<h5 className="text-dark mb-3">
							Frete Grátis
						</h5>
						<Link to="/products" className="btn btn-outline-success btn-lg">
							Continuar Comprando
						</Link>
						<a href="#" className="btn btn-outline-danger btn-lg ms-2 mt-xs-3">Finalizar Compra</a>
					</div>
				</li>
			</ul>
		</div>
	</main>

	)
}

export default ShoppingCart;