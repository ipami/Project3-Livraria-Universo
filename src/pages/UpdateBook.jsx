import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

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

      console.log(data);

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

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, publishing, author, description, price, image };

    await blogFetch.put(`/book/${id}`, {
      id: id,
      name: title,
      publishing: publishing,
      author: author,
      description: description,
      price: price,
      image: image,
    });

    navigate("/");
  };

  useEffect(() => {
    getBook();
  }, []);

  return (<main className="book-update">
    <h2>Editando: {title}</h2>

    <div className="info-edit-book-update">
      <img src={image} className="book-image-update" />
      <div className="edit-book-update">
        <form className="form-update" onSubmit={(e) => editPost(e)}>
          <div className="form-control form-update">
            <label >Título:</label>
            <input classname="update" type="text" name="title" id="title" placeholder="Digite o título" onChange={(e) => setTitle(e.target.value)} value={title || ""} />
            <label >Editora:</label>
            <input type="text" name="publishing" id="publishing" placeholder="Digite a editora" onChange={(e) => setPublishing(e.target.value)} value={publishing || ""}
            />
            <label >Author:</label>
            <input type="text" name="author" id="author" placeholder="Digite o autor"
              onChange={(e) => setAuthor(e.target.value)} value={author || ""} />
            <label >Preço:(ex.: 45.99)</label>
            <input type="number" name="price" id="price" min="0" max="100000" step=".01" placeholder="Digite o valor" onChange={(e) => setPrice(e.target.value)} value={price || ""}
            />
            <label >Endereço da imagem:</label>
            <input type="text" name="image" id="image" placeholder="Digite o endereço da imagem" onChange={(e) => setImage(e.target.value)} value={image || ""}
            />
          </div>

          <div className="form-control form-update">
            <label >Descrição:</label>
            <textarea name="description" id="description" placeholder="Digite a descrição..." onChange={(e) => setDescription(e.target.value)} value={description || ""}></textarea>
          </div>
          <input type="submit" value="Editar Post" className="btn-update" />
        </form>
      </div>
    </div>
  </main>
  );
};

export default UpdateBook;
