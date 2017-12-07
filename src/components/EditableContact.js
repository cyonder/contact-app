import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import ContactProfile from './ContactProfile';
import EditableContactForm from './EditableContactForm';

class EditableContact extends Component{
    componentDidMount(){
        this.props.fetchContact(this.props.match.params.id);
    }

    render(){
        console.log("EditableContact-props: ", this.props);

        if(this.props.isEditing){
            return(
                <Route
                    path={`/contacts/:id`}
                    render={ () => <EditableContactForm { ...this.props } initialValues={this.props.activeContact} /> }
                    />
            )
        }else{
            return(
                <Switch>
                    <Route
                        path="/contacts/new"
                        render={ () => <EditableContactForm { ...this.props } /> }
                        />
                    <Route
                        path="/contacts/:id"
                        render={ () => <ContactProfile { ...this.props } /> }
                        />
                </Switch>
            )
        }
    }
};

export default withRouter(EditableContact);
