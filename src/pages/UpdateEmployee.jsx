import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../css/UpdateBook.css'
import Loading from "../images/loading.gif"

function UpdateEmployee () {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [office, setOffice] = useState();
  const [department, setDepartment] = useState();


  const { id } = useParams();

  const getEmployee = async () => {
    try {
      const response = await blogFetch.get(`/employee/${id}`);

      const data = response.data;

      console.log(data);

      setName(data.name);
      setOffice(data.office);
      setDepartment(data.department);

    } catch (error) {
      console.log(error);
    }
  };

  const editEmployee = async (e) => {
    e.preventDefault();


    const btnblock = document.getElementById('updateemp');
    btnblock.setAttribute("disabled", "");
    btnblock.innerHTML = `<img src=${Loading} width="25px" height="25px"/>`


    await blogFetch.put(`/employee/${id}`, {
      id: id,
      name: name,
      office: office,
      department: department,

    });

    navigate("/admin");
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (<main className="book-update">
    <h2>Editando: {name}</h2>


    <div className="edit-book-update">
      <form className="form-update" onSubmit={(e) => editEmployee(e)}>
        <div className="form-control form-update">
          <label >Nome:</label>
          <input classname="update" type="text" name="name" id="name" placeholder="Digite o nome" onChange={(e) => setName(e.target.value)} value={name || ""} required/>
          <label >Cargo:</label>
          <input type="text" name="office" id="office" placeholder="Digite o cargo" onChange={(e) => setOffice(e.target.value)} value={office || ""}
          required/>
          <label >Departamento:</label>
          <input type="text" name="department" id="department" placeholder="Digite o autor"
            onChange={(e) => setDepartment(e.target.value)} value={department || ""} required/>
        </div>
        <button type="submit" className="btn-update mb-2" id="updateemp">Editar Funcionário</button>
        <Link to="/admin"><input type="button" value="Voltar" className="btn-back" /></Link>
      </form>
    </div>

  </main>
  );
};

export default UpdateEmployee;