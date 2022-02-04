import React from "react";
import FavoriElement from "./favori-element/FavoriElement";

function FavoriList(props) {
    return(
        <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
            { props.favoris.map( (favori, index) => (
            <FavoriElement 
                favori={favori} 
                key={index} 
                removeFavori={props.removeFavori}
            />
            ))}
        </div>
    )
}

export default FavoriList