import '../index.css'
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import DivBase from "../Componentes/DivBase";

function HomePage() {

    return (
        <div className="App">
            <header className="app-header">
                <NavBar />
            </header>
            <DivBase></DivBase>

            <Footer></Footer>
        </div>

    );
}

export default HomePage;
