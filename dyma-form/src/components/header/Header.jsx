import React from "react";

function Header() {
    return(
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="test" className="navbar-brand">Allmovie</a>
            <button className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Favoris</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header