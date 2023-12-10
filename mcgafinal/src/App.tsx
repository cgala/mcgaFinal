//import { useEffect, useState } from 'react'
import './App.css'
import Barra from './components/BarraNavegacion/Barra';
import uaiLogo from '/logoUAI.jpg'
import ListaBlogs from './components/ListaBlogs/ListaBlogs';
import { Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Login from './components/Login/Login';
import Registrarse from './components/Registrarse/Registrarse';
import ListaModificable from './components/ListaModificable/ListaModificable';
import Agregar from './components/Agregar/Agregar';

function App() {
  return (
      <div className='App App-header'>      
        <a href="#">
          <img src={uaiLogo} className="logo"/>
        </a>
        <h2>TRABAJO FINAL</h2>
        <Barra />
        <Routes>
          <Route path="/" element={ <ListaBlogs/> } />
          <Route path="nosotros" element={ <Nosotros/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="registrarse" element={ <Registrarse/> } />
          <Route path="listaMod" element={ <ListaModificable/> } />
          <Route path="agregar" element={ <Agregar/> } />
        </Routes>
      </div>
  )
}

export default App
