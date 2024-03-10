import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../style/movie.css';

const generoUrl = import.meta.env.VITE_GENER;
const apiKey = import.meta.env.VITE_API_KEY;

const Categoria = () => {
    const [selectedGenre, setSelectedGenre] = useState(28); // Gênero padrão: Ação
    const [generoMovies, setGeneroMovies] = useState([]);

    const getGeneroMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setGeneroMovies(data.results);
    };

    useEffect(() => {
        const generoMoviesUrl = `${generoUrl}${apiKey}&with_genres=${selectedGenre}`;
        getGeneroMovies(generoMoviesUrl);
    }, [selectedGenre]); 

    const handleGenreChange = (generoId) => {
        setSelectedGenre(generoId);
    };

    return (
        <div className="container">
            <h2 className="title">Filmes por Gênero</h2>
            <div className="genre-links">
                <a href="#" onClick={() => handleGenreChange(28)}>Ação</a>
                <a href="#" onClick={() => handleGenreChange(35)}>Comédia</a>
                <a href="#" onClick={() => handleGenreChange(18)}>Drama</a>
                <a href="#" onClick={() => handleGenreChange(10749)}>Romance</a>
                
            </div>
            <div className="movies-container">
                {generoMovies.length > 0 &&
                    generoMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Categoria;
    