import blogFetch from "../axios/config";
import { useState, useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import '../css/UpdateBook.css'

const UpdateClient = () => {
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



  const { id } = useParams();

  const getClient = async () => {
    try {
      const response = await blogFetch.get(`/client/${id}`);

      const data = response.data;

      setName(data.name);
      setEmail(data.email);
      setTel(data.tel);
      setPassword(data.password);
      setStreet(data.street);
      setNumber(data.number);
      setNeighborhood(data.neighborhood);
      setCity(data.city);
      setUF(data.uf);
      setCep(data.cep);


    } catch (error) {
      console.log(error);
    }
  };


  const checkCEP = (e) =>{
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


  const editClient = async (e) => {
    e.preventDefault();



    await blogFetch.put(`/client/${id}`, {
      id: id,
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

    navigate("/admin");
  };

  useEffect(() => {
    getClient();
  }, []);

  return (<main className="book-update">
    <h2>Editando: {name}</h2>


    <div className="edit-book-update">
      <form className="form-update" onSubmit={(e) => editClient(e)}>
        <div className="form-control form-update">
          <label >Nome:</label>
          <input classname="update" type="text" name="name" id="name" placeholder="Digite o nome" onChange={(e) => setName(e.target.value)} value={name || ""} required/>
          <label >Email:</label>
          <input classname="update" type="email" name="email" id="email" placeholder="Digite o email" onChange={(e) => setEmail(e.target.value)} value={email || ""} required/>
          <label >Nome:</label>
          <input classname="update" type="tel" name="tel" id="tel" placeholder="Digite o telefone" onChange={(e) => setTel(e.target.value)} value={tel || ""} required/>
          <label >CEP:</label>
          <input classname="update" type="text" name="cep" id="cep" placeholder="Digite o cep"  onBlur={(e) => checkCEP(e)}  onChange={(e) => setCep(e.target.value)} value={cep || ""} required/>
          <label >Rua:</label>
          <input classname="update" type="text" name="street" id="street" placeholder="Digite a rua" onChange={(e) => setStreet(e.target.value)} value={street || ""} required/>
          <label >Número:</label>
          <input classname="update" type="text" name="number" id="number" placeholder="Digite o número da residência" onChange={(e) => setNumber(e.target.value)} value={number || ""} required/>
          <label >Bairro:</label>
          <input classname="update" type="text" name="neighborhood" id="neighborhood" placeholder="Digite o bairro" onChange={(e) => setNeighborhood(e.target.value)} value={neighborhood || ""} required/>
          <label >Cidade:</label>
          <input classname="update" type="text" name="city" id="city" placeholder="Digite a cidade" onChange={(e) => setName(e.target.value)} value={city || ""} required/>
          <label >UF:</label>
          <input classname="update" type="text" name="uf" id="uf" placeholder="Digite a UF" onChange={(e) => setUF(e.target.value)} value={uf || ""} required/>

        </div>
        <input type="submit" value="Editar Cliente" className="btn-update" />
        <Link to="/admin"><input type="button" value="Voltar" className="btn-back" /></Link>
      </form>
    </div>

  </main>
  );
};

export default UpdateClient;