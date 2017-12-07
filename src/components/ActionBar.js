import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActionBar extends Component{
    onAddContact(){
        return(
            <nav className="action-bar">
                <button
                    className="btn btn-delete"
                    onClick={ this.props.history.goBack }
                    >Cancel</button>
                <label
                    htmlFor="submit-contact-form"
                    tabIndex="0"
                    className="btn btn-new">Create</label>
            </nav>
        );
    }

    onEditContact(){
        return(
            <nav className="action-bar">
                <button
                    onClick={ () => this.props.toggleForm(false) }
                    className="btn btn-delete">Cancel</button>
                <label
                    htmlFor="submit-contact-form"
                    tabIndex="0"
                    className="btn btn-new">Update</label>
            </nav>
        );
    }

    onContactHome(){
        return(
            <nav className="action-bar">
                <Link to="/contacts/new" className="btn btn-add">Add Contact</Link>
            </nav>
        );
    }

    onContactProfile(){
        return(
            <nav className="action-bar">
                <Link
                    to="/contacts/new"
                    className="btn btn-new">New</Link>
                <button
                    onClick={ () => this.props.toggleForm(true) }
                    className="btn btn-edit">Edit</button>
                <Link
                    to="/"
                    onClick={ () => this.props.deleteContact(this.props.activeContact.id) }
                    className="btn btn-delete">Delete</Link>
            </nav>
        );
    }

    render(){
        console.log("ActionBar-props: ", this.props);

        if(this.props.location.pathname === "/contacts/new"){
            return this.onAddContact()
        }else if(this.props.isEditing){
            return this.onEditContact()
        }else if(this.props.location.pathname.includes("/contacts/")){
            return this.onContactProfile()
        }else{
            return this.onContactHome()
        }
    }
}

export default ActionBar;
