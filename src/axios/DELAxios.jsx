import axios from "axios";


function DELAxios(props) {

    function del(url) {

        axios
            .delete(url)
            .then((resposta) => console.log(resposta))
            .catch((erro) => console.log(erro));
    }


    // function get(url) {
    //     axios
    //     .get(url)
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    //     .catch((error) => { console.error(error) });

    // }

    return (
        <div>
            <h1> DEL Axios</h1>
            <input type="number" id="campo" />
            <button onClick={() => {
                const delID = document.getElementById('campo')
                const id = delID.value
                const url = `https://pj3-estao-servidos.onrender.com/${props.typedel}/${id}`
                console.log(id)
                console.log(typeof id)
                console.log(url)
                del(url)
                // get(url)


            }}>DELETAR</button>

        </div>
    )

}

export default DELAxios;