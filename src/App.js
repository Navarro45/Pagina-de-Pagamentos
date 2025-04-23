import './App.css';
import HomePage from "./paginas/Home";
import Listagem from "./paginas/Listagem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Listagem" element={<Listagem />} />
        </Routes>

    </Router>

  );
}

export default App;
