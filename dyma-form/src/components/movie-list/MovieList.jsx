import React from "react";
import { MovieElement } from "..";

function MovieList(props) {
    return(
        <div className="w-75 d-flex flex-row flex-wrap align-content-start">
            { props.movie.map( (movie, index) => (<MovieElement movie={movie} key={index} updateSelectedMovie={() => props.updateSelectedMovie(index)}/>) ) }
        </div>
    )
}

export default MovieList