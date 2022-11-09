import React from 'react';

//import Login from "./paginas/login/Login";
//import Cadastrar from "./paginas/cadastrar/Cadastrar";
import Home from "./paginas/home/home";
import Navbar from "./componentes/estaticos/navbar/navbar";
import Footer from "./componentes/estaticos/footer/footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        </Routes>

      
        {/* <Routes>   
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/cadastrar' element={<Cadastrar />}/>
        </Routes>*/}
      </div>

      <Footer/>

    </Router>

  );
}

export default App;