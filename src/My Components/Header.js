import React from 'react'
import { Link } from 'react-router-dom'
import { memo } from "react";

function Header(props) {
    return (
        <div>
            <div className="App">
                <nav className="navbar navbar-expand-lg bg-light" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Resume">Resume</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link active" to="/Projects" >
                                        Projects
                                    </Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/Contact'>Contact Me</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default memo(Header);
