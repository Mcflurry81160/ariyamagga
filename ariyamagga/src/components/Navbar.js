import React from "react";
// import Home from './Home';
// import About from './About';
// import Gallery from './Gallery';
// import Contact from './Contact';
import {
    Link
} from 'react-router-dom'
import './Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);

        // this.setState({focused: 0});

        this.state = {
            focused: 0
        }
    }

    clicked(index) {
        console.log('in clicked', index);
        // this.setState({focused: index});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(function(item, index) {
                        if (this.state.focused === index) {
                            console.log('selected', index);
                        }
                    return <li key={index} onClick={this.clicked(index)}><Link to=''>{item}</Link></li>
                    //use this to bind to outer this
                    }, this)}
                </ul>
            </div>);
    }
}


export default Navbar;