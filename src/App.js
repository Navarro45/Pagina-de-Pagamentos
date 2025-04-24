import './App.css';
import HomePage from "./paginas/Home";
import Listagem from "./paginas/Listagem";
import Crud from "./paginas/Crud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Listagem />} />
            <Route path="/Vizualizar" element={<HomePage />} />
            <Route path="/Criar" element={<Crud />} />
        </Routes>

    </Router>

  );
}

export default App;
