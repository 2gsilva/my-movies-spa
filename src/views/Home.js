import React from "react";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesList } from '../components/MoviesList';
import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async() => {
        const data = await MoviesService.getMovies();
        setMovies(data.data);
    }

    useEffect(() => {
        fetchMovies();
      }, []);

    return(
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    )
};