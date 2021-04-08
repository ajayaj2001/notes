import React,{useEffect, useState} from "react";
import LinkItem from './LinkItem'
import axios from 'axios'
function LinkList() {

const[links,setLinks]=useState([]);
const [loading,setLoading]=useState(false);

useEffect(() => {

    getLinks();

}, [])

function getLinks(){
setLoading(true)
       axios.get('https://ajnotes.herokuapp.com/note')
       .then(response=>{
         console.log(response.data.notes);
        setLinks(response.data.notes)
       })
  setLoading(false)
 
}


  return (
  <div style={{opacity:loading?0.25:1}}>
    {links && links.map((link,index)=>(
      <LinkItem key={link._id}  link={link} index={index} showIndex={true}/>
    ))}
    
  </div>
  );
}

export default LinkList;
