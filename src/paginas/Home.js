import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";

function HomePage() {
    const { idPagamentos } = useParams();
    const [dados, setDados] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8800/pagamentos/${idPagamentos}`)
            .then((res) =>{
                console.log("Resposta do backend:", res.data);
                setDados(res.data);
            })
            .catch((err) => console.error("Erro ao buscar detalhes:", err));
    }, [idPagamentos]);

    const deletar = () => {
        axios.delete(`http://localhost:8800/pagamentos/${idPagamentos}`)
            .then(() => {alert("Registro deletado com sucesso!");
                voltarListagem();})
            .catch((err) => console.error("Erro ao deletar:", err));
    };

    const voltarListagem = () =>{
        navigate(`/`);
    }

    const alterarDados = () => {


    }

    if (!dados) {
        return <div>Carregando pagamento...</div>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <NavBar></NavBar>
            </header>
            <div className="card">
                <h2>Detalhes do Pagamento</h2>
                <p><strong>Cartão:</strong> {dados.numCartao}</p>
                <p><strong>Valor:</strong> R$ {dados.Valor}</p>
                <p><strong>Data:</strong> {dados.data_hora_pagamento}</p>
                <p><strong>Destinatário:</strong> {dados.destinatario}</p>
                <p><strong>Categoria:</strong> {dados.categoria}</p>
                <button onClick={deletar}>Deletar</button>
                <button onClick={alterarDados}>Alterar</button>
            </div>
            <Footer></Footer>
        </div>

    );
}
export default HomePage;
