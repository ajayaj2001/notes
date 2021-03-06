import React from "react";
import useFormValidation from '../Auth/useFormValidation'
import validateCreateLink from '../Auth/validateCreateLink'
import axios from 'axios'
function CreateLink(props) {
const INITIAL_STATE={
  title:"",
  message:""
}
const{handleSubmit,handleChange,values,errors}=useFormValidation(INITIAL_STATE,validateCreateLink,handleCreateLink)

async function handleCreateLink () {
     const{title,message}=values
    axios.post('https://ajnotes.herokuapp.com/note',
    {
      title:title[0],
      message:message[0]
    }).then(response=>{
      console.log(response);
      props.history.push('/')
    })
    .catch(err=>{
      console.log(err);
    })

}

  return (
    <form className="flex flex-column mt3" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.title}
          name="title"
          autoComplete="off"
          type="text"
          placeholder="A title for your link"
          className={errors.title&&"error-input"}
         />
           {errors.title&&<p className="error-text">{errors.title}</p>}
        <input
          onChange={handleChange}
          value={values.message}
          name="message"
          autoComplete="off"
          type="text"
          placeholder="enter message here"
          className={errors.message&&"error-input"}
        />
          {errors.message&&<p className="error-text">{errors.message}</p>}
                <button className="button" type="submit">Submit</button>
    </form>
  );
}

export default CreateLink;
