import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Header from './components/Header';

import Home from './components/Home';
import Trending from './components/Trending';

import Search from './components/Search';
import Footer from './components/Footer';



import './App.css';
import './Reset.css'



function App() {
  return (
    <Router>

      <div className="container-ya-app">
        
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/trending" component={Trending}/>
            <Route path="/search" component={Search}/>
            {/* <Route
              path="/trending"
              render={(props) => (
                <Trending {...props} movies={movies} />
              )}
            />

              <Route
              path="/show"
              render={(props) => (
                <Trending {...props} movies={movies} />
              )}
            /> */}
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App
