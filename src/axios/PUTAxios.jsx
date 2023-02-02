import axios from "axios";

function PUTAxios(props) {

    const putName = document.getElementById('name')
    const putID = document.getElementById('idput')
    const putOffice = document.getElementById('office')
    const putDepart = document.getElementById('department')



    function ShowInfo(type, id) {



        const url = `https://pj3-estao-servidos.onrender.com/${type}/${id}`

        console.log(url)
        
        axios
            .get(url)
            .then((response) => {
                putName.value = response.data.name
                putOffice.value = response.data.office
                putDepart.value = response.data.department
            }

            )
            .catch((error) => { console.error(error) });
    }

    

    function EditAxios(type, id){
        const url = `https://pj3-estao-servidos.onrender.com/${type}/${id}`

        console.log(url)
        axios
        .put(url,{
            id: id,
            name: putName.value,
            office: putOffice.value,
            department: putDepart.value
        } )
        .then((response) => {
            console.log(response)
        })
        .catch((erro) => console.log(erro));
        }

    

    return (

        <div>
            <h1> EDIT Axios</h1>
            <form>
                <label> id:</label>
                <input type="number" id="idput" />
                <input type="text" id="name" />
                <input type="text" id="office" />
                <input type="text" id="department" />

                </form>
            <button onClick={(e)=>{
                console.log(putID.value)
                e.preventDefault
                alert("Funcionou?")
                ShowInfo(props.typeput, putID.value)
            }} > Mostrar </button>

             <button onClick={(e) =>{

                e.preventDefault

                alert("Funcionando o segundo botão")
                EditAxios(props.typeput,putID.value)
            }}>Salvar Alterações</button> 

        </div>
    )
}

export default PUTAxios;