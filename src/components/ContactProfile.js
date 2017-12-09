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

    renderFigure(){
        return(
            <figure
                className="avatar contact-profile-figure contact-figure"
                data-initial={
                    `${this.props.activeContact.first_name.charAt(0)}${this.props.activeContact.last_name.charAt(0)}`
                }/>
        );
    }

    renderImage(){
        return(
            <img className="contact-profile-img" alt="pic" src={ this.props.activeContact.image } />
        );
    }

    renderContact(){
        const { activeContact } = this.props;

        return(
            <div className="contact-profile">
                <header className="contact-header">
                    { activeContact.image ? this.renderImage() : this.renderFigure() }
                    <span className="contact-name h4">{`${activeContact.first_name} ${activeContact.last_name}`}</span>
                    <span className="contact-job-title h6">{`${activeContact.job_title}`}</span>
                </header>
                { this.renderContactBody() }
            </div>
        );
    }

    render(){
        // console.log("ContactProfile-props: ", this.props);

        if(!this.props.activeContact){return "loading"}

        return(
            <div className="editable-contact">
                { this.renderContact() }
            </div>
        );
    }
}

export default ContactProfile;
