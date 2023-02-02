import axios from "axios";
import { createElement } from "react";


function GetAxios(typeget, local) {

    const url = `https://pj3-estao-servidos.onrender.com/${typeget}`
    console.log(url)

    const titlec1 = document.querySelector('#titlec1')
    const pc1 = document.querySelector('#pc1')
    const pricec1 = document.querySelector('#pricec1')
    
    axios
        .get(url)
        .then((response) => {
            console.log(response.data)})
          

        .catch ((error) => { console.error(error) })

    }



export default GetAxios;