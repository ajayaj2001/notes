export default function validateCreateLink(values) {

    let errors={};

    //title errors

if(!values.title){
    errors.title="title requires"
}
else if(String(values.title).length > 10){
errors.title="title must be at most 10 characters"
}

    //message errors

if(!values.message){
    errors.message="message required"
}
else if(String(values.message).length < 6){
    errors.message="message must be minimum 6 charater";
}

return errors;
}

