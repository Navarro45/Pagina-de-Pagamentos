import "./index.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function DivBase() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchPagamentos = () => {
        axios.get("http://localhost:8800/pagamentos")
            .then(response => setData(response.data))
            .catch(error => console.error("Erro ao buscar dados:", error));
    };

    useEffect(() => {
        fetchPagamentos();
    }, []);

    const vizualizarPagamento = (pagamento) =>{
        console.log("ID selecionado:", pagamento.idPagamentos);
        navigate(`/Vizualizar/${pagamento.idPagamentos}`);
    }

    return (
        <div className="div-base">
            <ul className="list">
                <li className="list-guia">Numero do Cartão - Valor  - Categoria  </li>
                {Array.isArray(data) && data.map((pagamento) => (
                    <li key={pagamento.idPagamentos}>
                        {pagamento.numCartao} - R${pagamento.Valor}  - {pagamento.categoria}
                        <button className="button" onClick={() => vizualizarPagamento(pagamento)}> Ver Detalhes</button>
                    </li>

                ))}

            </ul>
        </div>
    );
}

export default DivBase;