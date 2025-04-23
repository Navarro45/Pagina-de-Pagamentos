import "./index.css";

function NavBar(children,className) {

    return (
        <header className="Nav-Bar">
            <div className="Nav-Bar">
                <div className="Nav-bar-menu">
                    Menu
                    <div className="dropdown">
                        <a href="#">Opção 1</a>
                        <a href="#">Opção 2</a>
                        <a href="#">Opção 3</a>
                    </div>
                </div>
                <div className="Nav-bar-center">
                    <h2> Listagem de Pagamentos </h2>
                </div>
            </div>
        </header>

    )
}

export default NavBar;