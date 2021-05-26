import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import Header from './components/Header';
import HeroSec from './components/HeroSec';
import Home from './components/Home';
import Footer from './components/Footer';



import './App.css';
import './Reset.css'



function App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const idUrl = "http://www.omdbapi.com/?t=avengers&apikey=db7606e&";
    const trendingUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=c9947f7e0c9c203b2363269663122d16';
    const DiscoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=c9947f7e0c9c203b2363269663122d16&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free';
    axios.get(trendingUrl)
    .then(res => {
      const moviesData = res.data;
      const movies = moviesData.results;
      setMovies(movies);
      console.log(movies[0]);
    })

  },[]);
  

  return (
    <div className="container-ya-app">

        <Header />
        <HeroSec />
        <Home movies={movies} />
        <Footer />
    </div>
  );
}

export default App
