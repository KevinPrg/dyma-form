import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './features/films';
import apiMovie, {apiMovieMap} from './conf/api.movie';
import Header from './components/header/Header'

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
        console.log(movies, "movies")
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
      <Layout
          loaded={ loaded }
          updateMovies={ updateMovies }
          updateSelectedMovie={ updateSelectedMovie }
          movies={ movies }
          selectedMovie={ selected }
        />
    </div>
  );
}

export default App;
