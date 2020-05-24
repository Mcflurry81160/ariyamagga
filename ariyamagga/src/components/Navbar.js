import React from "react";
// import Home from './Home';
// import About from './About';
// import Gallery from './Gallery';
// import Contact from './Contact';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom'
import './Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            focused: 0
        }
    }

    clicked(index) {

        var state = {
            focused: index
        };
        this.setState(state);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(function(item, index) {
                        var style = '';
                        if (true) {
                            style = 'focused'
                        }
                    return <li className={style}>{item}</li>
                    })}
                </ul>
            </div>);
    }
}


export default Navbar;