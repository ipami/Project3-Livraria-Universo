import axios from "axios";


function GetAxios(type){

    axios
    .get(`https://pj3-estao-servidos.onrender.com/{type}`)
    .then((response) => {console.log(response.data[0])})
    .catch((error) => {console.error(error)});

    return(
        <div>Get Axios</div>
    )
}

export default GetAxios;