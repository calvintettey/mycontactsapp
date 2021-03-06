import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, getAllContacts } from '../store/contactlistActions';

export class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number:"",
            email: "",
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state)
        this.setState({name:"", number: "", email:""})
        console.log("submitted");
    }

    componentDidMount() {
        this.props.getAllContacts();
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" name="name" onChange={this.handleChange} />               
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input type="tel" name="number" onChange={this.handleChange} />               
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} />               
                    </div>
                    <div>
                    <button type="submit">Add To Contacts</button>
                    </div>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = {
    addContact, 
    getAllContacts
};

export default connect(null, mapDispatchToProps) (AddContactForm);