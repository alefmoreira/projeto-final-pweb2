import React from "react";
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

const Home = () =>{
    return(
        <div>
         <form>
         <input type="text" placeholder="Buscar Filmes" />
         <button type="submit">
            <BiSearchAlt2/>
        </button>
            
        </form>
        </div>
    )
}
export default Home