import NavBar from '../Componentes/NavBar';
import DivBase from "../Componentes/DivBase";
import Footer from "../Componentes/Footer";


function Listagem() {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Listagem Dos Pagamentos"/>
            </header>
            <DivBase>

            </DivBase>

            <Footer></Footer>

        </div>
    )

}

export default Listagem;