// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import "./index.css";

function NavBar(props) {
    return (
        <header className="Nav-Bar">
            <div className="Nav-Bar">
                <div className="Nav-bar-menu">
                    Menu
                    <div className="dropdown">
                        <ul>
                            <li><Link to="/">Listagem</Link></li>
                            <li><Link to="/Vizualizar">Alterar Pagamento</Link></li>
                            <li><Link to="/Criar">Novo Pagamento</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="Nav-bar-center">
                    <h2>{props.PageName}</h2>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
