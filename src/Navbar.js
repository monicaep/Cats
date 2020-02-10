import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/cats" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/general" className="nav-link">General</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/cats" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cats
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {this.props.cats.map(cat => (
                                    <NavLink to={`/cats/${cat.name}`} className="dropdown-item" key={cat.name}>{cat.name}</NavLink>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;