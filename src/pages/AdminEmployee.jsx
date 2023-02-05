import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../css/AdminEmployee.css";
import axios from "axios";

const AdminEmployee = () => {
    const [employee, setEmployee] = useState([]);

    const getEmployees = async () => {
        try {
            const response = await blogFetch.get("/employee");

            const data = response.data;

            setEmployee(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEmployee = async (id) => {
        await blogFetch.delete(`/employee/${id}`);

        const filteredEmployee = employee.filter((emp) => emp.id !== id);

        setEmployee(filteredEmployee);
    };

    useEffect(() => {
        getEmployees();
    }, []);
    return (

        <div className="admin-emp">
            <h1 className="admin-emp-title">Gerenciar funcionários</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.length === 0 ? (
                        <div className="loader-emp"></div>
                    ) : (employee.map((emp) => (
                        <tr>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.office}</td>
                            <td>{emp.department}</td>
                            <td>
                                <div className="actions">
                                    <Link className="btn edit-btn" to={`/admin/updateemployee/${emp.id}`}>
                                        Editar
                                    </Link>
                                    <button className="btn delete-btn" onClick={() => deleteEmployee(emp.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
)

};

export default AdminEmployee;
