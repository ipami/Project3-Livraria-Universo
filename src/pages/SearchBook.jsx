import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import '../css/Products.css';
import { useParams } from "react-router-dom";

function SearchBook(){

    const [search, setSearch] = useState("")

    console.log(search)





    const capitalize = input => {
        if (typeof input !== 'string') {
            return '';
        }
        const teste = input.charAt(0).toUpperCase() + str.substr(1);
        return teste
    }

    const searchValue = (input) =>{
        const teste = input

        const teste2= capitalize(teste)
        console.log = (teste2)

        return console.log(teste2.replace(" ", "%20"))
        
    }

    searchValue('torto arado')


    const getBooks = async () => {
        const url = `https://pj3-estao-servidos.onrender.com/book?name=Torto%20arado`
  
        try {
          const response = await axios.get(url)
          
    
          const data = response.data;
    
          console.log(data);



    
          setSearch(data);
    
        } catch (error) {
          console.log(error)
    
        }
    
    
      }
    
      useEffect(() => {
    
        getBooks()
    
}, [])
  
return (<div>
    <h1>socorro  Deus</h1>
    
<form action="" onSubmit={(e) => {
    e.preventDefault()
    const inputValue = document.querySelector('#search-field')
    console.log(inputValue.value)
    console.log(search)
    searchValue(inputValue.value)
}}>
    <label>Pesquisa </label>
    <input type="text" name="name" id="search-field" onChange={(e) => { setSearch(e.target.value)}}/>
    <button type="submit"> Procurar esse joça</button>

    {/* <div>
        <p>{search.name}</p>
    </div> */}
</form>






</div>)

// return (<main>

//     <h1 className="title">Nossos Livros</h1>

//     <div className="products">
//       {books.length === 0 ? (<div className="loader"></div>) : (
//         books.map((book) => (
//           <div className="product" key={book.id}>
//             <img className="product-image" src={book.image} />
//             <h4 className="product-name">{book.name}</h4>
//             <span className="product-price">R$ {toCorrect(book.price)}</span>
//             <span className="product-parc">ou em até 10x de R$ {showParc(book.price)}</span>
//             <div className="buttons">
//               <Link to={`/products/${book.id}`} className="btn">Ler mais</Link>
//               {/* <Link className="btn">Comprar</Link>  */}


//               {/* onClick={() => addProductToCart(book)} */}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
// </main>)

}


export default SearchBook