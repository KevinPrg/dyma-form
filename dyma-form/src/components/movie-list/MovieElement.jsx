import React from "react";

function MovieElement(props) {
    
    const mouseEnter = () => {
        props.updateSelectedMovie(props.movie.title)
 }
    return(
        <div onMouseEnter={mouseEnter} className="w-50 p-2">
            <div className="border d-flex">
                <img width="150" height="200" src={props.movie.img} alt="gladiator" className="d-block mx-auto" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{props.movie.title}</h5>
                    <hr className="w-100" />
                    <p> {props.movie.description} </p>
                </div>
            </div>
        </div>
    )
}

export default MovieElement