import React from "react";

function MovieElement() {
    return(
        <div className="w-25 p-2">
            <div className="card">
                <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/187/5gjou3t2qrznujqjcg7fqdmi76t-349.jpg" alt="gladiator" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">GLADIATOR</h5>
                    <p className="card-text"> le général MAXIMUS est le plus fidèle soutien de l'empereur</p>
                </div>
            </div>
        </div>
    )
}

export default MovieElement