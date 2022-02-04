import React from "react";
import MovieElement from "../movie-list/MovieElement/MovieElement";

function MovieList(props) {
    return(
        <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
            { props.movie.map( (movie, index) => (
            <MovieElement 
                movie={movie} 
                key={index} 
                isFavori={props.favoris.includes(movie.title)}
                addFavori={props.addFavori}
                removeFavori={props.removeFavori}
                updateSelectedMovie={() => props.updateSelectedMovie(index)}/>
            ))}
        </div>
    )
}

export default MovieList