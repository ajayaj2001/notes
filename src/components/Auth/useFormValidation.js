import {useState,useEffect} from "react";

function useFormValidation(initialState,validate,authenticateUser) {

    const [values,setValues]=useState(initialState);
    const [errors,setErrors]=useState({});
    const [isSubmitting,setIsSubmitting]=useState(false)

useEffect(() => {
    if(isSubmitting){
        const noErrors=Object.keys(errors).length===0;
        if(noErrors){
            authenticateUser();
            setIsSubmitting(false);
        }else{
            setIsSubmitting(false)
        }
    }

}, [errors])




    function handleChange(event){
        event.persist()
setValues(previousValues=>({
    ...previousValues,
    [event.target.name]:[event.target.value]
}))

    }

function handleBlur(){
    const validationErrors = validate(values)
    setErrors(validationErrors)
}


function handleSubmit(event){
    event.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);
}


    return{handleChange,handleBlur,handleSubmit,values,errors,isSubmitting};
}

export default useFormValidation;
