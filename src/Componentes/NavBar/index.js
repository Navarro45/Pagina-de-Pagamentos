// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
    return (
        <header className="Nav-Bar">
            <div className="Nav-Bar">
                <div className="Nav-bar-menu">
                    Menu
                    <div className="dropdown">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Listagem">Listagem</Link></li>
                            <li><Link to="/Novo">Novo</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="Nav-bar-center">
                    <h2>Listagem de Pagamentos</h2>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
