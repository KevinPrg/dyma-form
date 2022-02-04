import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './features/films';
import apiMovie, {apiMovieMap} from './conf/api.movie';
import Header from './components/header/Header'
import Favoris from './features/favoris'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {

  const [selected, setSelected] = useState(0)
  const [movies, setMovies] = useState()
  const [loaded, setLoaded] = useState(false)
  const [favoris, setFavoris] = useState([])

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

  const addFavoris = (title) => {
    const film = movies.find( movie => movie.title === title)
    setFavoris([...favoris, film])
  }

  const removeFavoris = (title) => {
    const index = favoris.findIndex(favori => favori.title === title)
    setFavoris(currentFav => currentFav.filter((_, i) => i !== index));
  }

  return (
    <Router>
    <div className="App d-flex flex-column">
      <Header />
      <Routes>
        <Route path='/' element={ <div>VOUS ETES SUR L'ACCEUIL</div> } />
        <Route path='/films' element={
          <Layout
            loaded={ loaded }
            updateMovies={ updateMovies }
            updateSelectedMovie={ updateSelectedMovie }
            movies={ movies }
            selectedMovie={ selected }
            addFavori={addFavoris}
            removeFavori={removeFavoris}
            favoris={favoris.map(favori => favori.title)}
        />
        } />
        <Route path='/favoris' element={ 
          <Favoris 
            favoris={favoris}
            removeFavori={removeFavoris}
          /> } />
      </Routes>
      { !favoris && <Navigate to="/films" />}
    </div>
    </Router>
  );
}

export default App;
