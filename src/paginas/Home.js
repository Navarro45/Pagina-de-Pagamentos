import NavBar from '../Componentes/NavBar';
import DivBase from "../Componentes/DivBase";
import Footer from "../Componentes/Footer";
import '../index.css'


function HomePage() {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Pagina Inicial"/>
            </header>

            <Footer></Footer>

        </div>
    )

}

export default HomePage;