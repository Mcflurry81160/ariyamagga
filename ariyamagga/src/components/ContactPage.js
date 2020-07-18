import React from 'react';
import './ContactPage.css';

export default class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="name" className="label-basic">First Name:</label>
                        <input type="text" className="form-control input-basic" id="first-name" placeholder="Enter first name"></input>
                    </div>
                    <div className="form-group">
                        <label for="name" className="label-basic">Last Name:</label>
                        <input type="text" className="form-control input-basic" id="last-name" placeholder="Enter last name"></input>
                    </div>
                    <div className="form-group">
                        <label for="name" className="label-basic">Address:</label>
                        <input type="text" className="form-control input-basic" id="address" placeholder="Enter address"></input>
                    </div>
                    <div className="form-group">
                        <label for="name" className="label-basic">Message:</label>
                        <textarea type="text" className="form-control input-basic" id="name" placeholder="Enter message"></textarea>
                    </div>
                    <button className="btn btn-primary">Submit Message</button>
                </form>
            </div>

        )
    }
}
