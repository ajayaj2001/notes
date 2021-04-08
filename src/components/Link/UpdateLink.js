import React,{useEffect,useState} from "react";
import useFormValidation from '../Auth/useFormValidation'
import validateCreateLink from '../Auth/validateCreateLink'
import axios from 'axios'
function UpdateLink(props) {
  const linkId=props.match.params.linkId;
  const[link,setLink]=useState({title:"",message:""});
const INITIAL_STATE={
  title:"",
  message:""
}

const{handleSubmit,handleChange,values,errors}=useFormValidation(INITIAL_STATE,validateCreateLink,handleCreateLink)

useEffect(() => {
  getLink()
}, [])


async function handleCreateLink () {
     const{title,message}=values
    axios.patch(`https://ajnotes.herokuapp.com/note/${linkId}`,
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

function getLink(){
  axios.get(`https://ajnotes.herokuapp.com/note/${linkId}`)
  .then(response=>{
    console.log(response.data);
   setLink({title:response.data.title,message:response.data.message})
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
          placeholder={link.title}
          className={errors.title&&"error-input"}
         />
           {errors.title&&<p className="error-text">{errors.title}</p>}
        <input
          onChange={handleChange}
          value={values.message}
          name="message"
          autoComplete="off"
          type="text"
          placeholder={link.message}
          className={errors.message&&"error-input"}
        />
          {errors.message&&<p className="error-text">{errors.message}</p>}
                <button className="button" type="submit">Submit</button>
    </form>
  );
}

export default UpdateLink;
