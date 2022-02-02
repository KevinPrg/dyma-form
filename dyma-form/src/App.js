import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, MovieList, MovieDetails, Loading } from './components';
import moviesList from './components/data'
import * as axios from 'axios';

import apiMovie from './conf/api.movie';

function App() {

  const [selected, setSelected] = useState(0)
  const [movies, setMovies] = useState()
  const [loaded, setLoaded] = useState(false)

  const updateSelectedMovie = (index) => {
    setSelected(index)
  };

  setTimeout( () => {
    setMovies(moviesList)
      setLoaded(true)
    }, 2000
  )

  useEffect(() => {
    apiMovie.get('/discover/movie')
      .then( response => console.log(response.data) )
      .catch( err => console.log(err));
  })

  return (
    <div className="App d-flex flex-column">
      <Header />
      { loaded && (
        <div className='d-flex flex-row flex-fill pt-4' >
        <MovieList movie={movies} updateSelectedMovie={updateSelectedMovie} />
        <MovieDetails movie={movies} select={selected} />
        </div>
      )  }
      { loaded === false && <Loading />  }
    </div>
  );
}

export default App;
