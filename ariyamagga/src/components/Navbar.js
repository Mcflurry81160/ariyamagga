import React from "react";
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <Router>
            <div>
                <div className="Navbar">
                    <a href="#home"><Link to="/">Home</Link></a>
                    <a href="#about"><Link to="/about">About</Link></a>
                    <a href="#gallery"><Link to="/gallery">Gallery</Link></a>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navbar;