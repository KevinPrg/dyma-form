import React from "react";

import './FavoriElement.scss';

function FavoriElement(props) {
    
    return(
            <div className={ "border bg-light d-flex flex-row Container_test" }>
                <img width="300" height="400" src={props.favori.img} alt="gladiator" className="d-block mx-auto" />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{props.favori.title}</h5>
                    <hr className="w-100" />
                    <p> {props.favori.details} </p>
                    <div>
                    <button  onClick={ () => {props.removeFavori(props.favori.title)}} className="btn btn-small btn-danger" >Remove</button> 
                    </div>
                </div>
            </div>
    )
}

export default FavoriElement