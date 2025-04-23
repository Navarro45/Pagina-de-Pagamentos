import './App.css';
import HomePage from "./paginas/Home";
import Listagem from "./paginas/Listagem";
import Crud from "./paginas/Crud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Listagem" element={<Listagem />} />
            <Route path="/Crud" element={<Crud />} />
        </Routes>

    </Router>

  );
}

export default App;
