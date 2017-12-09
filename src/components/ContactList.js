import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactList extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleClick(contact){
        this.props.selectContact(contact);
        this.props.toggleForm(false);
    }

    handleSearch(event){
        this.setState({
            search: event.target.value
        })
    }

    renderSearch(){
        return(
            <div className="has-icon-right">
                <input
                    type="text"
                    value={ this.state.search }
                    onChange={ this.handleSearch }
                    className="form-input"
                    placeholder="Search contacts"/>
                <i className="form-icon icon icon-search"></i>
            </div>
        );
    }

    computeFilteredContacts(contact){
        if( contact.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.last_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.job_title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }else if( contact.company.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ){
            return true;
        }
    }

    renderImage(image){
        return(
            <img className="contact-list-img" alt="pic" src={ image } />
        )
    }

    renderFigure(contact){
        return(
            <figure
                className="avatar contact-figure"
                data-initial={`${contact.first_name.charAt(0)}${contact.last_name.charAt(0)}`}/>
        )
    }

    renderList(){
        let filteredContacts = this.props.contactList.filter( (contact) => this.computeFilteredContacts(contact) );

        return filteredContacts.map((contact, index) => {
            return(
                <Link
                    to={`/contacts/${contact.id}`} key={index}
                    onClick={ () => this.handleClick(contact) }
                    className="contact">
                    { contact.image ? this.renderImage(contact.image) : this.renderFigure(contact) }
                    <span className="contact-text">{`${contact.first_name} ${contact.last_name}`}</span>
                </Link>
            );
        });
    }

    render(){
        // console.log("ContactList-props: ", this.props);

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
