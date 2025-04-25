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
    const [editando, setEditando] = useState(false);
    const [numCartao, setNumCartao] = useState("");
    const [Valor, setValor] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data_hora_pagamento, setData_hora_pagamento] = useState("");


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

    const salvar = () => {
        axios.put(`http://localhost:8800/pagamentos/${idPagamentos}`, {
            numCartao,
            Valor: Valor,
            destinatario,
            categoria
        })
            .then(() => {
                alert('Atualizado com sucesso!');
                setEditando(false);
                setDados({ numCartao, Valor: Valor, destinatario, categoria });
            })
            .catch((err) => console.error('Erro ao atualizar:', err));
    };

    if (!dados) {
        return <div>Carregando pagamento...</div>;
    }

    const alternarEdicao = () => setEditando(!editando);

    return (
        <div className="App">
            <header className="App-header">
                <NavBar></NavBar>
            </header>
            <div className="card">
                {/* Modo de visualização */}
                <div className={editando ? 'hidden' : 'visible'}>
                    <p><strong>Cartão:</strong> {dados.numCartao}</p>
                    <p><strong>Valor:</strong> R$ {dados.Valor}</p>
                    <p><strong>Data:</strong> {dados.data_hora_pagamento}</p>
                    <p><strong>Destinatário:</strong> {dados.destinatario}</p>
                    <p><strong>Categoria:</strong> {dados.categoria}</p>
                    <button onClick={alternarEdicao}>Editar</button>
                    <button onClick={deletar}>Deletar</button>
                </div>

                {/* Modo de edição */}
                <div className={editando ? 'visible' : 'hidden'}>
                    <p><strong>Número do Cartão:</strong> {dados.numCartao}</p>
                    <p><strong>Número do Cartão:</strong> <input type="number" value={numCartao} onChange={(e) => setNumCartao(e.target.value)} placeholder="Número do Cartão"></input></p>
                    <p><strong>Valor:</strong> R$ {dados.Valor}</p>
                    <p><strong>Valor:</strong> <input type="number" value={Valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"></input></p>
                    <p><strong>Destinatário:</strong> {dados.destinatario}</p>
                    <p><strong>Destinatário:</strong> <input type="text" value={destinatario} onChange={(e) => setDestinatario(e.target.value)} placeholder="Destinatário"></input></p>
                    <p><strong>Categoria:</strong> {dados.categoria}</p>
                    <p><strong>Categoria:</strong> <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria"></input></p>
                    <button onClick={salvar}>Salvar</button>
                    <button onClick={alternarEdicao}>Cancelar</button>
                    <button onClick={deletar}>Deletar</button>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}
export default HomePage;
