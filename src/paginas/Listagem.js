import NavBar from '../Componentes/NavBar';
import DivBase from "../Componentes/DivBase";
import Footer from "../Componentes/Footer";
import '../index.css'


function Listagem() {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <DivBase>

            </DivBase>

            <Footer></Footer>

        </div>
    )

}

export default Listagem;