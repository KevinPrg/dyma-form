import React from "react";
import { MovieElement } from "..";

function MovieList(props) {
    return(
        <div className="w-75 d-flex flex-row flex-wrap align-content-start">
            <MovieElement movie={props.movie[0]} updateSelectedMovie={props.updateSelectedMovie}/>
            <MovieElement movie={props.movie[1]} updateSelectedMovie={props.updateSelectedMovie}/>
            <MovieElement movie={props.movie[2]} updateSelectedMovie={props.updateSelectedMovie}/>
            <MovieElement movie={props.movie[3]} updateSelectedMovie={props.updateSelectedMovie}/>
        </div>
    )
}

export default MovieList