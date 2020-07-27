import React from 'react';
import './ContactPage.css';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            isLoading: 'false',
            statusText: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });

        fetch('/api/SendEmail',
            {
                crossDomain: true,
                method: 'GET'
            })
            .then((response) => response.text())
            .then(data => this.setState({statusText: data}))
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label-basic">First Name Y:</label>
                        <input type="text" className="form-control input-basic" placeholder="Enter first name" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label for="last-name" className="label-basic">Last Name:</label>
                        <input type="text" className="form-control input-basic" placeholder="Enter last name" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label for="name" className="label-basic">Email:</label>
                        <input type="email" className="form-control input-basic" id="email" placeholder="Enter email address" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label for="message" className="label-basic">Message:</label>
                        <textarea type="text" className="form-control input-basic" id="message" placeholder="Enter message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit form"></input>
                </form>
                <div>{this.state.statusText}</div>
            </div>
        )
    }
}
