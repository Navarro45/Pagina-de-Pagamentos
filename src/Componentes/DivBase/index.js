import "./index.css"
import {useEffect, useState} from "react";
import axios from "axios";

function DivBase(children) {

    const [data, setData] = useState([]);
    const [numCartao, setNumCartao] = useState("");
    const [valor, setValor] = useState("");
    const [dataHora, setDataHora] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [categoria, setCategoria] = useState("");

    const [cpfUpdate, setCpfUpdate] = useState("");
    const [nomeUpdate, setNomeUpdate] = useState("");

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
        <div className="div-base">
            <ul className="list">
                <li className="list-guia">Numero do Cartão - Valor  - Categoria  </li>
                {Array.isArray(data) && data.map((pagamento) => (
                    <li key={pagamento.idPagamento}>
                        {pagamento.numCartao} - R${pagamento.Valor}  - {pagamento.categoria}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DivBase;