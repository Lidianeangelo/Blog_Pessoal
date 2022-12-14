import React from 'react'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import CadastroPostagem from "./components/postagens/cadastroPostagem/CadastroPostagem";
//import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
//import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import Footer from "./componentes/estaticos/footer/footer";
import Navbar from "./componentes/estaticos/navbar/navbar";
//import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
//import DeletarTema from "./components/temas/deletarTema/DeletarTema";
//import ListaTema from "./components/temas/listatema/ListaTema";
//import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/home";
import Login from "./paginas/login/Login";
import store from "./store/store";
//import contato from "./paginas/contato/contato";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            
            
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

/*<Route path="/cadastroUsuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            
            
            <Route path="/contato" element={<Contato />} />*/