import blogFetch from "../axios/config";
import { useState, useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";

import '../css/UpdateBook.css'

const UpdateBook = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [publishing, setPublishing] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const { id } = useParams();

  const getBook = async () => {
    try {
      const response = await blogFetch.get(`/book/${id}`);

      const data = response.data;

      setTitle(data.name);
      setPublishing(data.publishing);
      setAuthor(data.author);
      setDescription(data.description);
      setPrice(data.price);
      setImage(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const UpBook = async (e) => {
    e.preventDefault();



    await blogFetch.put(`/book/${id}`, {
      id: id,
      name: title,
      publishing: publishing,
      author: author,
      description: description,
      price: price,
      image: image,
    });

    navigate("/admin");
  };

  useEffect(() => {
    getBook();
  }, []);

  return (<main className="book-update">
    <h2>Editando: {title}</h2>

    <div className="info-edit-book-update">
      <img src={image} className="book-image-update" />
      <div className="edit-book-update">
        <form className="form-update" onSubmit={(e) => UpBook(e)}>
          <div className="form-control form-update">
            <label >Título:</label>
            <input classname="update" type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)} value={title || ""} required/>
            <label >Editora:</label>
            <input type="text" name="publishing" id="publishing" placeholder="Digite a editora" onChange={(e) => setPublishing(e.target.value)} value={publishing || ""}
            required/>
            <label >Author:</label>
            <input type="text" name="author" id="author" placeholder="Digite o autor"
              onChange={(e) => setAuthor(e.target.value)} value={author || ""} required/>
            <label >Preço:(ex.: 45.99)</label>
            <input type="number" name="price" id="price" min="0" max="100000" step=".01" placeholder="Digite o valor" onChange={(e) => setPrice(e.target.value)} value={price || ""}
           required />
            <label >Endereço da imagem:</label>
            <input type="text" name="image" id="image" placeholder="Digite o endereço da imagem" onChange={(e) => setImage(e.target.value)} value={image || ""}
            required/>
          </div>

          <div className="form-control form-update">
            <label >Descrição:</label>
            <textarea name="description" id="description" placeholder="Digite a descrição..." onChange={(e) => setDescription(e.target.value)} value={description || ""}></textarea>
          </div>
          <input type="submit" value="Editar Post" className="btn-update" />
          <Link to="/admin"><input type="button" value="Voltar" className="btn-back" /></Link>
        </form>
      </div>
    </div>
  </main>
  );
};

export default UpdateBook;
