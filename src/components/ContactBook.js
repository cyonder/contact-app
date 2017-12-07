import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import ContactList from './ContactList';
import ActionBar from './ActionBar';
import EditableContact from './EditableContact';
import ContactHome from './ContactHome';

import {
    selectContact,
    fetchContact,
    deleteContact,
    addContact,
    editContact
} from '../actions/index';

class ContactBook extends Component{
    constructor(){
        super();
        this.state={ isEditing: false }
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm(defaultValue){
        this.setState({
            isEditing: defaultValue
        })
    }

    render(){
        return(
            <div className="contact-book">
                <ContactList
                    { ...this.props }
                    toggleForm={ this.toggleForm }
                    />
                <main className="main">
                    <ActionBar
                        { ...this.props }
                        isEditing={ this.state.isEditing }
                        toggleForm={ this.toggleForm }
                        />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={ () => <ContactHome count={ this.props.contactList.length } /> }
                            />
                        <Route
                            path="/contacts/:id"
                            render={ () => <EditableContact { ...this.props } isEditing={ this.state.isEditing } toggleForm={ this.toggleForm } /> }
                            />
                    </Switch>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        contactList: state.contacts.contactList,
        activeContact: state.contacts.activeContact
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectContact: selectContact,
        fetchContact: fetchContact,
        deleteContact: deleteContact,
        addContact: addContact,
        editContact: editContact
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactBook));
