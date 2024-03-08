import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Filmes from './pages/Filmes.jsx'
import Categoria from './pages/Categoria.jsx'
import Busca from './pages/Busca.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element ={<App/>}>
        <Route path='/' element = {<Home />}/>
        <Route path='filmes/:id' element = {<Filmes />}/>
        <Route path='/' element = {<Busca />}/>
        <Route path ='/' element ={<Categoria />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
