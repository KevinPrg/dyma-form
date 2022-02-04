import React from "react";
import { NavLink } from 'react-router-dom'

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
                        <NavLink to="/films" className="nav-link" activeClassName="active" >HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/favoris" className="nav-link" activeClassName="active" >Favoris</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header