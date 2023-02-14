import blogFetch from "../axios/config";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../css/NewBook.css";

import imageNew from "../images/insira.png"

function NewBook () {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [publishing, setPublishing] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const createBook = async (e) => {
        e.preventDefault();


        await blogFetch.post("/book", {
            id: '',
            name: title,
            publishing: publishing,
            author: author,
            description: description,
            price: price,
            image: image,
        });

        navigate("/admin");
    };

    return (<main className="main-newbook">
        <img src={imageNew} className="image-new-newbook" />
        <div className="new-book-newbook">
            <form onSubmit={(e) => createBook(e)} className="form-newbook">
                <div className="form-control form-newbook">
                    <label >Título:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o título"
                        onChange={(e) => setTitle(e.target.value)} className="input-newbook"
                    required/>
                    <label >Editora:</label>
                    <input type="text" name="publishing" id="publishing" placeholder="Digite a editora"
                        onChange={(e) => setPublishing(e.target.value)} className="input-newbook"
                        required/>
                    <label >Author:</label>
                    <input type="text" name="author" id="author" placeholder="Digite o autor"
                        onChange={(e) => setAuthor(e.target.value)} className="input-newbook"
                        required/>
                    <label >Preço:(ex.: 45.99)</label>
                    <input type="number" name="price" id="price" min="0" max="100000" step=".01" placeholder="Digite o valor"
                        onChange={(e) => setPrice(e.target.value)} className="input-newbook"
                        required />
                    <label >Endereço da imagem:</label>
                    <input type="text" name="image" id="image" placeholder="Digite o endereço da imagem"
                        onChange={(e) => setImage(e.target.value)} className="input-newbook"
                        required/>
                </div>
                <div className="form-control form-newbook">
                    <label htmlFor="description">Descrição:</label>
                    <textarea name="description" className="textarea-newbook" id="description" placeholder="Digite a descrição..." onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <input type="submit" value="Cadastrar Livro" className="btn-newbook" />
                <Link to="/admin"><button className="btn-newbook backmenu back-to-adminpage" >Voltar</button></Link>
            </form>
        </div>
    </main>
    );
};

export default NewBook;