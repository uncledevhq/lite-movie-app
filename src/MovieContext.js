import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {

        const updateFx = (url) => {
            axios.get(url).then((res) => {
                const moviesData = res.data;
                const movies = moviesData.results;
                setMovies(movies);
            })
            // console.log(resource);
        }

  },[]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};