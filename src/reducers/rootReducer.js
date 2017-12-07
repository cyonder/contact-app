import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ContactsReducer from './contactsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    contacts: ContactsReducer,
});

export default rootReducer;
