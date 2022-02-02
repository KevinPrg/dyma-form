import React from "react";

function MovieDetails(props) {
    return(
        <div className="w-25 bg-light p-4 d-flex flex-column">
            <h5> {props.movie[props.select].title} </h5>
            <hr className="w-100"/>
            <p className="text-secondary"> {props.movie[props.select].details} </p>
            <div>
                <img className="d-block mx-auto" src={props.movie[props.select].img} alt="film" />
            </div>
            <hr className="w-100"/>
            <p> {props.movie[props.select].description} </p>
        </div>
    )
}

export default MovieDetails