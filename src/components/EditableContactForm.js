import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import ContactValidation from '../contactValidation';

class EditableContactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            fn: '-', // Initial letters of
            ln: '-', // first and laste name
            file: '',
            dataURI: '' // Image
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onFirstNameBlur = this.onFirstNameBlur.bind(this);
        this.onLastNameBlur = this.onLastNameBlur.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
    }

    componentDidMount(){
        // Auto set initials on edit
        if(this.props.isEditing){
            this.setState({
                fn: this.refs.fn.value.charAt(0),
                ln: this.refs.ln.value.charAt(0),
                dataURI: this.props.activeContact.image
            })
        }
    }

    renderTextField(field){
        return(
            <div className="form-group">
                <label className="form-label">
                    { field.label }
                    <span className="error">
                        { field.meta.touched ? field.meta.error : '' }
                    </span>
                </label>
                <input
                    type="text"
                    className="form-input"
                    { ...field.input } />
            </div>
        );
    }

    onSubmit(values){
        values.image = this.state.dataURI;

        if(this.props.isEditing){
            this.props.editContact(values);
            this.props.toggleForm(false);
        }else{
            values.id = _.uniqueId('2');
            this.props.addContact(values);
        }
        this.props.history.push('/');
    }

    onFirstNameBlur(event){
        if(event.target.value){
            this.setState({ fn: event.target.value.charAt(0) });
        }else{
            this.setState({ fn: '-' });
        }
    }

    onLastNameBlur(event){
        if(event.target.value){
            this.setState({ ln: event.target.value.charAt(0) });
        }else{
            this.setState({ ln: '-' });
        }
    }

    handlePicture(event){
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                dataURI: reader.result
            })
        }
        reader.readAsDataURL(file);
    }

    renderFigure(){
        return(
            <figure
                className="avatar contact-figure contact-profile-figure hoverable"
                data-initial={`${this.state.fn}${this.state.ln}`} >
            </figure>
        )
    }

    renderImage(){
        return(
            <img className="contact-profile-img hoverable" alt="pic" src={ this.state.dataURI } />
        )
    }

    renderForm(){
        const { handleSubmit, location: { pathname } } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div className="a a-header">
                    <div className="file-upload">
                        <div className="overlay"><span>Upload Picture</span></div>
                        { this.state.dataURI && pathname !== "/contacts/new" ? this.renderImage() : this.renderFigure() }
                        <input
                            type="file"
                            onChange={ this.handlePicture }
                            className="upload"/>
                    </div>
                    <div className="b">
                        <Field
                            onBlur={ this.onFirstNameBlur }
                            label="First Name"
                            ref="fn"
                            name="first_name"
                            component={ this.renderTextField }
                        />
                        <Field
                            onBlur={ this.onLastNameBlur }
                            label="Last Name"
                            ref="ln"
                            name="last_name"
                            component={ this.renderTextField }
                        />
                    </div>
                </div>
                <div className="a a-section">
                    <Field
                        label="Email"
                        name="email"
                        component={ this.renderTextField }
                    />
                    <Field
                        label="Phone"
                        name="phone"
                        component={ this.renderTextField }
                    />
                </div>
                <div className="a a-section per100">
                    <Field
                        label="Address"
                        name="address"
                        component={ this.renderTextField }
                    />
                </div>
                <div className="a a-section">
                    <Field
                        label="Job Title"
                        name="job_title"
                        component={ this.renderTextField }
                    />
                    <Field
                        label="Company"
                        name="company"
                        component={ this.renderTextField }
                    />
                </div>
                <input type="submit" id="submit-contact-form" className="d-none" />
            </form>
        );
    }

    render(){
        // console.log("EditableContactForm-props: ", this.props);
        return(
            <div className="editable-contact">
                <div className="editable-contact-form">
                    { this.renderForm() }
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contactContactForm',
    validate: (values) => ContactValidation(values)
})(
    connect(null)(EditableContactForm)
);
