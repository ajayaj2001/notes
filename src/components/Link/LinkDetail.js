import React,{useEffect, useState} from "react";
import LinkItem from '../Link/LinkItem'
import axios from 'axios'
function LinkDetail(props) {
  const linkId=props.match.params.linkId;
  const[link,setLink]=useState(null);
useEffect(() => {
  
getLink()

}, [])

function getLink(){
  axios.get(`https://ajnotes.herokuapp.com/note/${linkId}`)
  .then(response=>{
    console.log(response.data);
   setLink(response.data)
  })

}



  return !link?(
    <div>Loading....</div>
  ):(
  <div>
    <LinkItem  link={link} showIndex={false}/>

  </div>
  );
}

export default LinkDetail;
