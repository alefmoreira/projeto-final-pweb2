import React from "react";
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () =>{
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");

    }

    return(
        <div>
         <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Buscar Filmes" 
         onChange={(e) => setSearch(e.target.value)}
         value={search}
         />
         <button type="submit">
            <BiSearchAlt2/>
        </button>
            
        </form>
        </div>
    )
}

export default Home