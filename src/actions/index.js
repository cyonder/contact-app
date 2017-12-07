export function selectContact(contact){
    return{
        type: 'SELECT_CONTACT',
        payload: contact
    };
}

export function fetchContact(id){
    return{
        type: 'FETCH_CONTACT',
        id: id
    };
}

export function deleteContact(id){
    return{
        type: 'DELETE_CONTACT',
        id: id
    }
}

export function addContact(contact){
    //TODO: Add ID to the new contact
    return{
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function editContact(contact){
    return{
        type: 'EDIT_CONTACT',
        payload: contact
    }
}
