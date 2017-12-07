import React, { Component } from 'react';

class ContactHome extends Component{
    render(){
        return(
            <div className="empty-state">
                <span className="h1 contact-count">{ `${this.props.count} Contacts` }</span>
            </div>
        );
    }
}

export default ContactHome;
