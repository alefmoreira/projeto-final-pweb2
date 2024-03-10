import { Link } from 'react-router-dom'
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import '../style/Navbar.css'
const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
      <Link to ="/"><BiCameraMovie/>777Filmes</Link>
      </h2>
      <h2>  <Link to ="categoria">Categoria</Link>
      <Link to ="top">Top</Link></h2>
    </nav>
   
  )
}

export default Navbar