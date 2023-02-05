import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../css/NewBook.css";

import imageNew from "../images/insira.png"

const NewEmployee = () => {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [office, setOffice] = useState();
    const [department, setDepartment] = useState();


    const createEmployee = async (e) => {
        e.preventDefault();

        const emp = { name, office, department };

        await blogFetch.post("/employee", {
            id: '',
            name: name,
            office: office,
            department: department,
        });

        navigate("/admin");
    };

    return (<main className="main-newbook">

            {/* <h2>Inserir novo livro:</h2> */}
            <form onSubmit={(e) => createEmployee(e)} className="form-newbook">
                <div className="form-control form-newbook">
                    <label >Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Digite o nome"
                        onChange={(e) => setName(e.target.value)} className ="input-newbook"
                    />
                    <label >Cargo:</label>
                    <input type="text" name="office" id="office" placeholder="Digite o cargo"
                        onChange={(e) => setOffice(e.target.value)} className ="input-newbook"
                    />
                    <label >Departamento:</label>
                    <input type="text" name="department" id="department" placeholder="Digite o departamento"
                        onChange={(e) => setDepartment(e.target.value)} className ="input-newbook"
                    />
                </div>
                <input type="submit" value="Cadastrar Funcionário" className="btn-newbook" />
                <Link to="/admin"><button className="btn-newbook back-to-adminpage" >Voltar</button></Link>
            </form>
    </main>
    );
};

export default NewEmployee;