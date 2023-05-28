import { Header } from './components/Header';
import './App.css';
import React from "react";
import {Rotas} from "./routes/Rotas"

function App() {

  return (
    <div className="App">      
        <Header />
        <Rotas />
    </div>
  );
}

export default App;
