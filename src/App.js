import logo from './logo.svg';
import './App.css';
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import DivBase from "./Componentes/DivBase";
import {useState, useEffect} from "react";
import axios from 'axios';


function App() {




    return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <DivBase>

      </DivBase>

      <Footer></Footer>

    </div>
  );
}

export default App;
