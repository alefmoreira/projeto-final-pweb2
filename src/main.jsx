import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Filmes from './pages/Filmes.jsx'
import Busca from './pages/Busca.jsx'
import TopMovies from './pages/TopMovies.jsx'
import Categoria from './pages/Categoria.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element ={<App/>}>
        <Route path='/' element = {<Home />}/>
        <Route path='movie/:id' element = {<Filmes />}/>
        <Route path='search' element = {<Busca />}/>
        <Route path ='top' element ={<TopMovies />}/>
        <Route path = 'categoria' element = {<Categoria/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
