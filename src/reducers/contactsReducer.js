const initialState = {
    activeContact: null,
    contactList: [
        {
            id: "1",
            first_name: "Cagdas",
            last_name: "Yonder",
            phone: "6472370001",
            email: "cagdasyonder@gmail.com",
            address: "75 East Avenue",
            job_title: "CEO",
            company: "StudentValley",
            image: ""
        },
        {
            id: "2",
            first_name: "Oliver",
            last_name: "Clarke",
            phone: "0944672767",
            email: "oliver.clarke@example.com",
            address: "8327 Central St",
            job_title: "Web Developer",
            company: "",
            image: "https://randomuser.me/api/portraits/men/73.jpg"
        },
        {
            id: "3",
            first_name: "Ethan",
            last_name: "Thomas",
            phone: "5167434376",
            email: "ethan.thomas@example.com",
            address: "8327 Central St",
            job_title: "",
            company: "",
            image: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            id: "4",
            first_name: "Shanon",
            last_name: "Pilcher",
            phone: "5358748362",
            email: "spilcher6@example.com",
            address: "82261 Pawling Hill",
            job_title: "Environmental Specialist",
            company: "",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
            id: "5",
            first_name: "Zachary",
            last_name: "Walker",
            phone: "0736117060",
            email: "zachary.walker@example.com",
            address: "6770 Texas Ave",
            job_title: "",
            company: "",
            image: "https://randomuser.me/api/portraits/men/79.jpg"
        },
        {
            id: "6",
            first_name: "Patricia",
            last_name: "Tyson",
            phone: "5712132120",
            email: "patriciaLtyson@example.com",
            address: "23 North Avenue",
            job_title: "Manager",
            company: "",
            image: ""
        },
        {
            id: "7",
            first_name: "Debbie",
            last_name: "Espinha",
            phone: "7441985365",
            email: "despinhae@sphinn.com",
            address: "248 Division Place",
            job_title: "Pharmacist",
            company: "Fivebridge",
            image: "https://randomuser.me/api/portraits/women/23.jpg"
        },
        {
            id: "8",
            first_name: "Stanly",
            last_name: "Parramore",
            phone: "3507732376",
            email: "sparramoref@example.com",
            address: "84 Mifflin Place",
            job_title: "Data Coordiator",
            company: "Quaxo",
            image: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            id: "9",
            first_name: "Verne",
            last_name: "Badham",
            phone: "9719864592",
            email: "vbadhamg@example.com",
            address: "84 Mifflin Place",
            job_title: "Director of Sales",
            company: "Roodel",
            image: "https://randomuser.me/api/portraits/women/51.jpg"
        },
        {
            id: "10",
            first_name: "Cosettes",
            last_name: "Auchinleck",
            phone: "3577735676",
            email: "cauchinleck7@example.com",
            address: "821 Oneill Hill",
            job_title: "Engineer II",
            company: "Skipfire",
            image: "https://randomuser.me/api/portraits/men/71.jpg"
        },
        {
            id: "11",
            first_name: "Angela",
            last_name: "May",
            phone: "3142018605",
            email: "morris.watsi@example.com",
            address: "2461 Chandler Drive",
            job_title: "Teacher",
            company: "",
            image: "http://www.fakepersongenerator.com/Face/female/female20161025297385742.jpg"
        },
        {
            id: "12",
            first_name: "Doris",
            last_name: "Peck",
            phone: "2146805557",
            email: "bradly2004",
            address: "4956 Poco Mas Drive",
            job_title: "",
            company: "Zany Brainy",
            image: "http://www.fakepersongenerator.com/Face/female/female1022603751709.jpg"
        },
        {
            id: "13",
            first_name: "Chad",
            last_name: "Rios",
            phone: "2256784729",
            email: "davon1998@example.com",
            address: "4997 Eva Pearl Street",
            job_title: "Financial Analyst",
            company: "Quickbiz",
            image: ""
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
