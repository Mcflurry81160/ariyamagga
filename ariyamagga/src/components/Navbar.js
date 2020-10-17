import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { focused: 0 };
    }

    clicked(event, index) {
        // console.log("clicked", this.state);
        event.stopPropagation();
        this.setState({ focused: index });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, index) => {
                        var focusedStyle = '';
                        if (this.state.focused === index) {
                            focusedStyle = 'focused'
                        }
                        return <li className={focusedStyle} key={item.itemIndex} onClick={event => this.clicked(event, index)}><Link to={item.navbarLinkPath}>{item.itemName}</Link></li>
                        //use this to bind to outer this
                    })}
                </ul>
            </div>);
    }
}

export default Navbar;