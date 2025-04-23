
import NavBar from '../Componentes/NavBar';
import Footer from "../Componentes/Footer";
import axios from "axios";
import {useEffect, useState} from "react";


function Crud() {

    const [data, setData] = useState([]);
    const [numCartao, setNumCartao] = useState("");
    const [valor, setValor] = useState("");
    const [dataHora, setDataHora] = useState("");
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
            valor,
            data_hora_pagamento: dataHora,
            destinatario,
            categoria
        })
            .then(() => {
                alert("Pagamento criado com sucesso!");
                fetchPagamentos();
                setNumCartao("");
                setValor("");
                setDataHora("");
                setDestinatario("");
                setCategoria("");
            })
            .catch(error => console.error("Erro ao criar pagamento:", error));
    };

    const updatePagamento = (id) => {
        axios.put(`http://localhost:8800/pagamentos/${id}`, {
            numCartao,
            valor,
            data_hora_pagamento: dataHora,
            destinatario,
            categoria
        })
            .then(() => {
                alert("Pagamento atualizado com sucesso!");
                fetchPagamentos();
                setNumCartao("");
                setValor("");
                setDataHora("");
                setDestinatario("");
                setCategoria("");
            })
            .catch(error => console.error("Erro ao atualizar pagamento:", error));
    };

    const deletePagamento = (idPagamento) => {
        axios.delete(`http://localhost:8800/pagamentos/${idPagamento}`)
            .then(() => {
                alert("Pagamento apagado com sucesso!");
                fetchPagamentos();
            })
            .catch(error => console.error("Erro ao apagar pagamento:", error));
    };

    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Crud do Pagamento"/>
            </header>
            <div className="crud">
                <input placeholder="Numero do Cartão"></input>
                <input placeholder="Valor"></input>
                <input placeholder="Destinatário"></input>
                <button onClick={createPagamento()} type="button">Novo Pagamento</button>

            </div>
            <Footer></Footer>

        </div>
    )

}

export default Crud;