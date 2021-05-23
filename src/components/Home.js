import React from 'react';

import TabSection from './TabSection';
import MovieList from './MovieList';

function Home(props) {
    return (
        <main>
            <TabSection />
             <MovieList movies={props.movies}/>
        </main>
    )
}

export default Home;
