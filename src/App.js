import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [movies, setMovies] = useState([
  //   {
  //     Title: "Louis C.K. 2017",
  //     Year: "2017",
  //     imdbID: "tt6736782",
  //     Type: "movie",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BOGYwMmVlMWUtZDE2My00MzMyLTk5MTQtZDdmM2U5YWQwZjM1XkEyXkFqcGdeQXVyMjExNDAyOTU@._V1_SX300.jpg"
  // },
  // {
  //     Title: "The Healer (TV Series 2017)",
  //     Year: "2017–",
  //     imdbID: "tt7467448",
  //     Type: "series",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BM2VlNzJkNGYtOTU1Ni00MzM3LWIzMWItNjU3MDk2NTlhMGMyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
  // },
  // {
  //     Title: "Hakgyo 2017",
  //     Year: "2017",
  //     imdbID: "tt7020608",
  //     Type: "series",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BZjM1MzJjOGEtYjJlMi00MjA0LTg0ZGQtNDcxNThiYjU1YTE0XkEyXkFqcGdeQXVyNzk0NTA5NQ@@._V1_SX300.jpg"
  // },
  // {
  //     Title: "The 74th Annual Golden Globe Awards 2017",
  //     Year: "2017",
  //     imdbID: "tt5824900",
  //     Type: "movie",
  //     Poster: "https://m.media-amazon.com/images/M/MV5BMzg5NTQ0ODM5NF5BMl5BanBnXkFtZTgwMzM0Mjk3MDI@._V1_SX300.jpg"
  // }
  ]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=db7606e";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.Search);
    setMovies(responseJson.Search);

  }

  useEffect(() => {
    getMovieRequest();
  },[]);


  return (
    <div className="container-fluid movie-app">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App
