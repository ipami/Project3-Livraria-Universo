import React from "react";



function ShoppingCart() {
	return (<main className="flex-fill">
		<div className="container">
			<h1 className="title mt-4">Carrinho de Compras</h1>
			<ul className="list-group mb-3">
				<li className="list-group-item py-3">
					<div className="row g-3">
						<div className="col-4 col-md-3 col-lg-2">
							<a href="#">
								<img src="/img/produtos/000008.jpg" className="img-thumbnail" />
							</a>
						</div>
						<div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
							<h4>
								<b><a href="#" className="text-decoration-none text-dark">
									Abacate Manteiga</a></b>
							</h4>
							<h5>
								Abacate manteiga da melhor qualidade possível e muito fresco.
							</h5>
						</div>
						<div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
							<div className="input-group">
								<button className="btn btn-outline-dark btn-sm" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
									</svg>
								</button>
								<input type="text" className="form-control text-center border-dark" />
								<button className="btn btn-outline-dark btn-sm" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
									</svg>
								</button>
								<button className="btn btn-outline-danger border-dark btn-sm" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg>
								</button>
							</div>
							<div className="text-end mt-2">
								<small className="text-secondary">Valor kg: R$ 3,99</small><br />
								<span className="text-dark">Valor Item: R$ 15,96</span>
							</div>
						</div>
					</div>
				</li>
				<li className="list-group-item py-3">
					<div className="text-end">
						<h4 className="text-dark mb-1">
							Valor Total: R$ 63,84
						</h4>
						<h5 className="text-dark mb-3">
							Frete Grátis
						</h5>
						<a href="#" className="btn btn-outline-success btn-lg">
							Continuar Comprando
						</a>
						<a href="#" className="btn btn-danger btn-lg ms-2 mt-xs-3">Fechar Compra</a>
					</div>
				</li>
			</ul>
		</div>
	</main>

	)
}

export default ShoppingCart;