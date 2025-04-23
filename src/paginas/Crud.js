
import NavBar from '../Componentes/NavBar';
import Footer from "../Componentes/Footer";
import '../index.css'


function Crud() {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Crud do Pagamento"/>
            </header>

            <Footer></Footer>

        </div>
    )

}

export default Crud;