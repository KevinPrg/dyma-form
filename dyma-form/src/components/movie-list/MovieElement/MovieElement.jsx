import React from "react";

import './MovieElement.scss';

function MovieElement(props) {
    
    const mouseEnter = () => {
        props.updateSelectedMovie(props.movie.title)
 }
    return(
            <div onMouseEnter={mouseEnter} className={ "border bg-light d-flex flex-row Container_test" }>
                <img width="300" height="400" src={props.movie.img} alt="gladiator" className="d-block mx-auto" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{props.movie.title}</h5>
                    <hr className="w-100" />
                    <p> {props.movie.details} </p>
                </div>
            </div>
    )
}

export default MovieElement