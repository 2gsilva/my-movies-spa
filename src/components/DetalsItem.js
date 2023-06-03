import React from "react";
import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export const DetailsItem = ({id}) => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async() => {
        const data = await MoviesService.getMovieById(id);
        setMovies(data.data);
    }

    useEffect(() => {
        fetchMovies();
      }, []);
    return(
        <div>
            <h1>Detalhes</h1>
            <br />
            <img src={movies.Poster} width={233} height={350} />
            <p><b>Titulo:</b> {movies.Title}</p>
            <p><b>Lançado:</b> {movies.Released}</p>
            <p><b>Gênero:</b> {movies.Genre}</p>
        </div>
    )
};
