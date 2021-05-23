import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import TabSection from './components/TabSection';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './Reset.css'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "mpali",
      category: "family",
      id: 1,
      poster: "https://chomba.live/cdn/random/mpali-4.jfif",
      watchLink: "https://zambezimagic.dstv.com/show/mpali",
      year: 2019,
      parentalGuidance: 16,
      rating: 7.8,
      plotSummery: "Mpali follows the story of Mr Nguzu, a polygamist married to seven women, Junza (the first wife), Mwiza (the second wife), Monde (the third wife), Tombi (the fourth wife), Shupiwe (the fifth wife, Tamara (the sixth wife) and lastly Nancy (the seventh wife",
      season: [1,2,3,4]
    },
    {
      title: "shi mumbi",
      category: "comedy",
      id: 2,
      poster: "https://chomba.live/cdn/random/shi-mumbi.jpg",
      watchLink: "https://zambezimagic.dstv.com/show/shi-mumbi/",
      year: 2020,
      parentalGuidance: 16,
      rating: 7.2,
      plotSummery: "Shi Mumbi has to find a way to get Belinda back after the failed Kitchen party.",
      season: [1,2]
    },
    {
      title: "Makofi",
      category: "drama",
      id: 3,
      poster: "https://chomba.live/cdn/random/make-off.jpg",
      watchLink: "https://zambezimagic.dstv.com/show/makofi",
      year: 2021,
      parentalGuidance: 16,
      rating: 7.2,
      plotSummery: "Makofi tells the story of a young woman who defies tradition and norms to become a prize-fighter...in all respects of the word.",
      season: [1]
    },
    {
      title: "snakes and ladders",
      category: "drama",
      id: 4,
      poster: "https://chomba.live/cdn/random/snakes%26ladders.jpg",
      watchLink: "https://zambezimagic.dstv.com/show/snakes-and-ladders",
      year: 2020,
      parentalGuidance: 13,
      rating: 5.2,
      plotSummery: "A riveting drama about the challenges faced by a miner working in the Copperbelt. The storyline hones on the themes of love, lust, alcholism, broken relationships and financial struggles.",
      season: [1,2,3]
    },
    {
      title: "the security guard",
      category: "comedy",
      id: 5,
      poster: "https://chomba.live/cdn/random/the-gurd.jpg",
      watchLink: "https://zambezimagic.dstv.com/show/makofi",
      year: 2020,
      parentalGuidance: 16,
      rating: 6.1,
      plotSummery: "General Katundu has it out for Alibaba, forcing Alibaba to pursue alternative avenues of revenue as 'insurance'.",
      season: [1,2,3,4]
    },
    {
      title: "zuba",
      category: "comedy",
      id: 6,
      poster: "https://chomba.live/cdn/random/zuba.png",
      watchLink: "https://zambezimagic.dstv.com/show/zuba",
      year: 2019,
      parentalGuidance: 16,
      rating: 8.1,
      plotSummery: "The story of Zuba continues, a story about love, trust and betrayal. The story revolves around an innocent, rural teenage girl who has to leave her family and education behind to do a maid’s job with a complex, wealthy urban family where she falls for the young son of the house.",
      season: [1,2,3,4,5]
    }
  ]);

  // const getMovieRequest = async () => {
  //   const url = "http://www.omdbapi.com/?s=star wars&apikey=db7606e";

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   console.log(responseJson.Search);
  //   setMovies(responseJson.Search);

  // }

  // useEffect(() => {
  //   getMovieRequest();
  // },[]);


  return (
    <div className="container-ya-app">
      <Header />
      <TabSection />
      <MovieList movies={movies}/>
      <Footer />
    </div>
  );
}

export default App
