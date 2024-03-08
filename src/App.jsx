
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
 <div className='App'>
    <nav id="navbar">
      <Link to ="/movie/1">Filme tal</Link>
    </nav>
    <Link to ="/busca">buscando tal</Link>
    <Link to ="/categoria">ação tal</Link>
 </div>

  )
}

export default App
