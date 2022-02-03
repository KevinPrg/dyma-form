import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, MovieList, MovieDetails, Loading, SearchBar } from './components';

import apiMovie, {apiMovieMap} from './conf/api.movie';

function App() {

  const [selected, setSelected] = useState(0)
  const [movies, setMovies] = useState()
  const [loaded, setLoaded] = useState(false)

  const updateSelectedMovie = (index) => {
    setSelected(index)
  };

  useEffect(() => {
    apiMovie.get('/discover/movie')
      .then( res => res.data.results)
      .then( moviesApi => {
        const movies = moviesApi.map(apiMovieMap)
         updateMovies(movies)
      })
      .catch( err => console.log(err));
  }, [setMovies])

  const updateMovies = (datas) => {
    setMovies(datas)
    setLoaded(true)
 }

  return (
    <div className="App d-flex flex-column">
      <Header />
      <SearchBar  updateMovies={updateMovies} />
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
