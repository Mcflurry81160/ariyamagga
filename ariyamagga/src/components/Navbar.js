import React from "react";
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
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
                <div className="navbar">
                    <a href="#home"><Link to="/">Home</Link></a>
                    <a href="#about"><Link to="/about">About</Link></a>
                    <a href="#gallery"><Link to="/gallery">Gallery</Link></a>
                    <a href="#contact"><Link to="/contact">Contact</Link></a>
                </div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/home"><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/gallery"><Gallery /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route exact path="*"><Home /></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navbar;