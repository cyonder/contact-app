import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactList extends Component{
    handleClick(contact){
        this.props.selectContact(contact);
        this.props.toggleForm(false);
    }

    renderSearch(){
        return(
            <div className="has-icon-right">
                <input type="text" className="form-input" placeholder="Search contacts"/>
                <i className="form-icon icon icon-search"></i>
            </div>
        );
    }

    renderList(){
        return this.props.contactList.map((contact, index) => {
            return(
                <Link
                    to={`/contacts/${contact.id}`} key={index}
                    onClick={ () => this.handleClick(contact) }
                    className="contact">
                    <figure
                        className="avatar contact-figure"
                        data-initial={`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}/>
                    <span className="contact-text">{`${contact.first_name} ${contact.last_name}`}</span>
                </Link>
            );
        });
    }

    render(){
        console.log("ContactList-props: ", this.props);

        return(
            <aside className="contact-list">
                <div className="search-bar">
                    { this.renderSearch() }
                </div>
                <div className="contacts">
                    { this.renderList() }
                </div>
            </aside>
        );
    }
}

export default ContactList;
