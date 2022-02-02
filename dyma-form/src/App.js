import React, { useState } from 'react';
import './App.css';
import { Header, MovieList, MovieDetails, Loading } from './components';
import moviesList from './components/data'

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
