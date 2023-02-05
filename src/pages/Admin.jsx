import { Link } from "react-router-dom";
import "../css/Admin.css"

function Admin() {

    return (
        <div className="container-admin">
            <div className="menu-admin">

                <h1>Bem vindo!</h1>

                <h3>O que deseja fazer?</h3>

                <div className="admin-nav">
                    <div className="emp-field">
                        <h3>Menu Funcionários</h3>
                        <div className="buttons-admin-menu">
                        <Link to="/admin/newemployee"><button className="btn-admin-home admin-new-emp">Inserir funcionários</button></Link>
                           <Link to="/admin/employee"><button className="btn-admin-home btn-admin-file">Gerenciar funcionários</button></Link>
                        </div>
                    </div>
                    <div className="book-field">
                        <h3>Menu Livros</h3>
                        <div className="buttons-admin-menu">
                            <Link to="/admin/newbook"><button className="btn-admin-home admin-new-book">Inserir livros</button></Link>
                            <Link to="/admin/book"><button className="btn-admin-home btn-admin-file">Gerenciar livros</button></Link>
                        </div>
                    </div>


                    <div className="client-field">
                        <h3>Menu Cliente</h3>
                        <div className="buttons-admin-menu">
                            <button className="btn-admin-home btn-admin-file">Gerenciar cadastros de clientes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )


}

export default Admin