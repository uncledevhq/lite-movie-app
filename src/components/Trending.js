import React, { useState, useEffect } from 'react';

import axios from 'axios';

import TabSection from './TabSection';
import MovieList from './MovieList';
import HeroSec from './HeroSec';

function Trending() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const url = "https://api.themoviedb.org/3/trending/all/week?api_key=c9947f7e0c9c203b2363269663122d16";
        axios.get(url).then((res) => {
            const moviesData = res.data;
            const movies = moviesData.results;
            setMovies(movies);
        })
        // console.log(resource);

  },[]);

    return (
        <main>
            <HeroSec />
            <TabSection activeTab={'trending'} />
             <MovieList movies={movies}/>
        </main>
    )
}

export default Trending;
