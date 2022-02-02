import React from "react";

import Container_test from './MovieElement.scss';

function MovieElement(props) {
    
    const mouseEnter = () => {
        props.updateSelectedMovie(props.movie.title)
 }
    return(
            <div onMouseEnter={mouseEnter} className={ "border bg-light d-flex flex-row Container_test" }>
                <img width="200" height="300" src={props.movie.img} alt="gladiator" className="d-block mx-auto" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{props.movie.title}</h5>
                    <hr className="w-100" />
                    <p> {props.movie.details} </p>
                </div>
            </div>
    )
}

export default MovieElement