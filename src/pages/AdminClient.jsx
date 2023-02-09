import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../css/AdminEmployee.css";
import axios from "axios";

const AdminClient = () => {
    const [clients, setClients] = useState([]);

    const getClients = async () => {
        try {
            const response = await blogFetch.get("/client");

            const data = response.data;

            setClients(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEmployee = async (id) => {
        await blogFetch.delete(`/client/${id}`);

        const filteredClient = clients.filter((client) => client.id !== id);

        setClients(filteredClient);
    };

    useEffect(() => {
        getClients();
    }, []);
    return (

        <div className="admin-emp">
            <h1 className="admin-emp-title">Gerenciar Clientes</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Login</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length === 0 ? (
                        <div className="loader-emp"></div>
                    ) : (clients.map((client) => (
                        <tr>
                            <th scope="row">{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.login}</td>
                            <td>{client.city}</td>
                            <td>
                                <div className="actions">
                                    <Link className="btn edit-btn" to={`/admin/updateclient/${client.id}`}>
                                        Editar
                                    </Link>
                                    <button className="btn delete-btn" onClick={() => deleteEmployee(client.id)}>
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

export default AdminClient;
