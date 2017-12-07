import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class EditableContactForm extends Component{
    constructor(){
        super();
        this.state={
            fn: '-', // Initial letters of
            ln: '-' // first and laste name
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onFirstNameBlur = this.onFirstNameBlur.bind(this);
        this.onLastNameBlur = this.onLastNameBlur.bind(this);
    }

    componentDidMount(){
        // Auto set initials on edit
        if(this.props.isEditing){
            this.setState({
                fn: this.refs.fn.value.charAt(0),
                ln: this.refs.ln.value.charAt(0)
            })
        }
    }

    renderTextField(field){
        return(
            <div className="form-group">
                <label className="form-label">{ field.label }</label>
                <input
                    type="text"
                    className="form-input"
                    { ...field.input }
                />
            </div>
        );
    }

    onSubmit(values){
        if(this.props.isEditing){
            this.props.editContact(values);
            this.props.toggleForm(false);
        }else{
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

    renderForm(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div className="a a-header">
                    <figure
                        className="avatar avatar-xxl contact-figure"
                        data-initial={`${this.state.fn}${this.state.ln}`} />
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
        console.log("EditableContactForm-props: ", this.props);
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
    form: 'contactContactForm'
})(
    connect(null)(EditableContactForm)
);
