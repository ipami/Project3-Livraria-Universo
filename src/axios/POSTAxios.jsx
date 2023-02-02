import axios from "axios";


function PostAxios(props) {


    const url = `https://pj3-estao-servidos.onrender.com/${props.typepost}`

    // const newbook = {
    //     id: "",
    //     titulo: "Estudando Post Axios",
    //     status: true
    // };
    const newRegister = {

        book: {
            id: "",
            name: "Torto arado",
            publishing: "Todavia",
            author: "Vieira Junior, Itamar",
            description: "Um texto épico e lírico, realista e mágico que revela, para além de sua trama, um poderoso elemento de insubordinação social. Vencedor do prêmio Leya 2018. Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas — a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.",
            price: "49,90",
            image: ""
        },

        employee: {
            id: "",
            name: "Lindalva Cristina",
            office: "Auxilar Administrativo",
            department: "Logística"
        }
    };


    function Register(type) {

        axios
            .post(url, newRegister[type])
            .then((response) => { console.log(response) })
            .catch((error) => { console.error(error) });

    }


    return (
        <div>
            <h1>POST Axios</h1>
        <button onClick={() => Register(props.typepost)}>Cadastrar Livro</button>
        </div>
    )
}



export default PostAxios;