export default function contactValidation(values){
    const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const errors = {};

    let first_name = values.first_name;
    let last_name = values.last_name;
    let email = values.email;

    if(!first_name){
        errors.first_name = 'is required';
    }

    if(!last_name){
        errors.last_name = 'is required';
    }

    if(!EMAIL_REGEX.test(email)){
        errors.email = 'is in wrong format';
    }

    return errors;
}
