import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/NewEmployee.css";
import imageEmployee from "../images/employee.jpg"

function NewEmployee () {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [office, setOffice] = useState();
    const [department, setDepartment] = useState();


    const createEmployee = async (e) => {
        e.preventDefault();

        await blogFetch.post("/employee", {
            id: '',
            name: name,
            office: office,
            department: department,
        });

        navigate("/admin");
    };

    return (<main className="main-newemployee">
        <img src={imageEmployee} className="image-new-newemployee" />
        <div className="insert-employee"> 
        <h2 className="title-new-employee"> Insira um novo funcionário</h2>

            <form onSubmit={(e) => createEmployee(e)} className="form-newemployee">
                <div className="form-control form-newemployee">
                    <label >Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Digite o nome"
                        onChange={(e) => setName(e.target.value)} className="input-newemployee"
                        required />
                    <label >Cargo:</label>
                    <input type="text" name="office" id="office" placeholder="Digite o cargo"
                        onChange={(e) => setOffice(e.target.value)} className="input-newemployee"
                        required />
                    <label >Departamento:</label>
                    <input type="text" name="department" id="department" placeholder="Digite o departamento"
                        onChange={(e) => setDepartment(e.target.value)} className="input-newemployee"
                        required />
                </div>
                <input type="submit" value="Cadastrar Funcionário" className="btn-newemployee" />
                <Link to="/admin"><button className="btn-newemployee back back-to-adminpage" >Voltar</button></Link>
            </form>
            </div>
    </main>
    );
};

export default NewEmployee;