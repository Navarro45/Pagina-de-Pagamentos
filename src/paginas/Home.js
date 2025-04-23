import NavBar from '../Componentes/NavBar';
import Footer from "../Componentes/Footer";


function HomePage() {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar PageName="Pagina Inicial"/>
            </header>
            <div>
                <p className="Texto de Apresentação">
                    Trabalho Realisado pelo Aluno Pedro Henrique Vargas Navarro
                </p>
            </div>

            <Footer></Footer>

        </div>
    )

}

export default HomePage;