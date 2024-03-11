import { Link } from 'react-router-dom'
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import '../style/Navbar.css'
const Navbar = () => {
  return (
    <nav id="navbar">

      <h2>
      <Link to ="/">ToWatch</Link>
      </h2>
      <h2>  <Link to ="categoria">Generos</Link>
      <Link to ="top">Top filmes</Link></h2>
      
    </nav>
   
  )
}

export default Navbar