
import NavBar from '../Componentes/NavBar';
import Footer from "../Componentes/Footer";
import axios from "axios";
import {useEffect, useState} from "react";


function Crud() {

    const [data, setData] = useState([]);
    const [numCartao, setNumCartao] = useState("");
    const [Valor, setValor] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [categoria, setCategoria] = useState("");

    const fetchPagamentos = () => {
        axios.get("http://localhost:8800/pagamentos")
            .then(response => setData(response.data))
            .catch(error => console.error("Erro ao buscar dados:", error));
    };
    useEffect(() => {
        fetchPagamentos();
    }, []);

    const createPagamento = () => {

        axios.post("http://localhost:8800/pagamentos", {
            numCartao,
            Valor,
            destinatario,
            categoria
        })
            .then(() => {
                alert("Pagamento criado com sucesso!");
                setNumCartao("");
                setValor("");
                setDestinatario("");
                setCategoria("");
            })
            .catch(error => console.error("Erro ao criar pagamento:", error));
    };



    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Adicionar Novo Pagamento"/>
            </header>
            <div className="crud">
                <input type="number" value={numCartao} onChange={(e) => setNumCartao(e.target.value)} placeholder="Número do Cartão"></input>
                <input type="number" value={Valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"></input>
                <input type="text" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} placeholder="Destinatário"></input>
                <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria"></input>
                <button onClick={createPagamento} type="button">Novo Pagamento</button>
            </div>
            <Footer></Footer>

        </div>
    )

}

export default Crud;