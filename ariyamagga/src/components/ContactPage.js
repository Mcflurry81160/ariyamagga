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
            subject: '',
            message: '',
            isLoading: false,
            submitted: false,
            statusText: null
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

        fetch('https://func-app-ariyamaggasenasuna.azurewebsites.net/api/SendEmail',
        // fetch('http://localhost:7071/api/SendEmail',
            {
                crossDomain: true,
                method: 'POST',
                body: JSON.stringify(
                {
                    subject: this.state.subject === null || this.state.subject.trim() === "" ? "Inquiry from " + this.state.firstName + " " + this.fromLastName : this.state.subject,
                    fromFirstName: this.state.firstName,
                    fromLastName: this.state.lastName,
                    fromAddress: this.state.fromAddress,
                    message: this.state.message,
                })
            })
            .then((response) => response.text())
            .then(data => this.setState({ statusText: data }))
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false, submitted: true });
            });
    }

    render() {
        const Form = () => {

            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label-basic">First Name:</label>
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
                        <label className="label-basic">Subject (Optional)</label>
                        <input type="text" className="form-control input-basic" placeholder="Enter subject for your message" name="subject" value={this.state.subject} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label for="message" className="label-basic">Message:</label>
                        <textarea type="text" className="form-control input-basic" id="message" placeholder="Enter message" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit form"></input>
                </form>);
        }

        const FormSubmittedText = () => {
            return (
                <div>{this.state.statusText}</div>
            );
        }

        //TODO: add a loading spinner here
        return (
            <div>
                {this.state.submitted ? <FormSubmittedText /> : <Form />}
            </div>
        )
    }
}
