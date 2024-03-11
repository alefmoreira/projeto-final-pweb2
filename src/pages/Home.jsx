import React from "react";
import{BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

import '../style/home.css'

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
         <form onSubmit={handleSubmit} >
        <div class="search-box">
         <input type="searchTerm" placeholder="Buscar Filmes" 
         onChange={(e) => setSearch(e.target.value)}
         value={search}
         />
         <button type="submit" class="search-btn">
            <BiSearchAlt2/>
        </button>
        </div>
            
        </form>

        
        </div>
        
    )
}

export default Home