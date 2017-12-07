const initialState = {
    activeContact: null,
    contactList: [
        {
            id: "1",
            first_name: "Cagdas",
            last_name: "Yonder",
            phone: "6472340001",
            email: "cagyon@email.com",
            address: "14 East Avenue",
            job_title: "CEO",
            company: "StudentValley"
        },
        {
            id: "2",
            first_name: "Birand",
            last_name: "Yonder",
            phone: "6471232333",
            email: "biryon@email.com",
            address: "27 West Avenue",
            job_title: "CEO",
            company: null
        },
        {
            id: "3",
            first_name: "Anyss",
            last_name: "Hamza",
            phone: "5148066694",
            email: "anysshamza@email.com",
            address: "5 That Avenue",
            job_title: "CEO",
            company: "WantMeals"
        },
        {
            id: "4",
            first_name: "Cagim",
            last_name: "Gunes",
            phone: "6476470564",
            email: "caggun@email.com",
            address: "13 This Avenue",
            job_title: "Gamer",
            company: null
        },
        {
            id: "5",
            first_name: "Arda",
            last_name: "Ersan",
            phone: "6471235757",
            email: "arersan@email.com",
            address: "23 North Avenue",
            job_title: "Manager",
            company: "Pasha"
        }
   ]
}

export default function contactsReducer(state = initialState, action){
    switch(action.type){
        case 'SELECT_CONTACT':
            return { ...state, activeContact: action.payload }
        case 'FETCH_CONTACT':
            return { ...state, activeContact:
                state.contactList.find(contact => contact.id === action.id)
            }
        case 'DELETE_CONTACT':
            return { ...state, contactList:
                state.contactList.filter(contact => contact.id !== action.id)
            }
        case 'ADD_CONTACT':
            return { ...state, contactList: [ ...state.contactList, action.payload ] }
        case 'EDIT_CONTACT':
            return { ...state, contactList:
                state.contactList.map(contact => {
                    if(contact.id === action.payload.id){
                        contact = action.payload;
                    }
                    return contact;
                })
            }
        default:
            return state;
    }
}
