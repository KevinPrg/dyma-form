import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';

const Layout = (props) => {
    console.log(props, "layout")
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
          <MovieList movie={props.movies} updateSelectedMovie={props.updateSelectedMovie} />
          <MovieDetails movie={props.movies[props.selectedMovie]} />
        </div>
      ) : (
          <Loading />
        )}
    </>
  )
}

export default Layout;