import React, { Component } from 'react';

class ContactProfile extends Component{
    renderContactBody(){
        const { activeContact } = this.props;

        return(
            <div className="contact-body">
                <div className="contact-labels">
                    <label className="data-label">Email</label>
                    <label className="data-label">Phone</label>
                    <label className="data-label">Address</label>
                    <label className="data-label">Company</label>
                </div>
                <div className="contact-data">
                    <span className="data">{ activeContact.email }</span>
                    <span className="data">{ activeContact.phone }</span>
                    <span className="data">{ activeContact.address }</span>
                    <span className="data">{ activeContact.company }</span>
                </div>
            </div>
        );
    }

    renderContact(){
        const { activeContact } = this.props;

        return(
            <div className="contact-profile">
                <header className="contact-header">
                    <figure
                        className="avatar avatar-xl contact-figure"
                        data-initial={`${activeContact.first_name.charAt(0)}${activeContact.last_name.charAt(0)}`}/>
                    <span className="contact-name h4">{`${activeContact.first_name} ${activeContact.last_name}`}</span>
                    <span className="contact-job-title h6">{`${activeContact.job_title}`}</span>
                </header>
                { this.renderContactBody() }
            </div>
        );
    }

    render(){
        console.log("ContactProfile-props: ", this.props);

        const { activeContact } = this.props;
        if(!activeContact){return "loading"}

        return(
            <div className="editable-contact">
                { this.renderContact() }
            </div>
        );
    }
}

export default ContactProfile;
