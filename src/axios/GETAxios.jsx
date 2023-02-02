import axios from "axios";


function GetAxios(props) {

    const url = `https://pj3-estao-servidos.onrender.com/${props.typeget}`

    axios
        .get(url)
        .then((response) => {
            console.log(response.data)
            console.log(response.data.length)
            for( let i = 0; i < response.data.length; i++){
                console.log(response.data[i])
            }
        }


        )
        .catch((error) => { console.error(error) });

    return (<div>
        <h1>Get Axios</h1>
    </div>
    )
}

export default GetAxios;