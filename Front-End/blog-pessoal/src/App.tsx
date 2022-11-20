import React from 'react';

//import Cadastrar from "./paginas/cadastrar/cadastrar";
import Home from "./paginas/home/home";
import Navbar from "./componentes/estaticos/navbar/navbar";
import Footer from "./componentes/estaticos/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./paginas/login/login";
import "./App.css";
//import CadastroUsuario from "./paginas/cadastrar/CadastroUsuario";

function App() {
  return (
    <Router>
      <Navbar />
      
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          
        </Routes>
      </div>

      <Footer />
      
    </Router>
    
  );
}
export default App;