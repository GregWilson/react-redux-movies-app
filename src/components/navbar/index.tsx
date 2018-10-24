import * as React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id={'app_navbar'}>
            <a className="navbar-brand" href="#/movies">
                <i className="fa fa-film" aria-hidden="true"></i>
                Movies
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto"></div>
                <ul className={"navbar-nav"}></ul>
            </div>
        </nav>
    );
}
