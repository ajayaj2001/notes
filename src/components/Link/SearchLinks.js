import React, { useState,useEffect } from "react";
import axios from 'axios'
import LinkItem from '../Link/LinkItem'
function SearchLinks() {
  const[filter,setFilter]=useState("");
  const[links,setLinks]=useState([]);
  const[filteredLinks,setFilteredLinks]=useState([]);

useEffect(() => {
  
  getLinks()

}, [])

function getLinks(){
         axios.get('https://ajnotes.herokuapp.com/note')
         .then(response=>{
           console.log(response.data.notes);
          setLinks(response.data.notes)
         })
   
  }



function handleSearch(event){
  event.preventDefault();
  const query=filter.toLowerCase();
  const matchedLinks=links.filter(link=>{
    return( link.message.toLowerCase().includes(query) 
            || link.title.toLowerCase().includes(query)
            || link.createdAt.toLowerCase().includes(query)
  )})
     setFilteredLinks(matchedLinks);
}

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          Search : 
          <input onChange={event=>setFilter(event.target.value)}/>
            <button type="submit">Ok</button>
        </div>
      </form>
      {filteredLinks.map((filteredLink,index)=>(
        <LinkItem 
        key={filteredLink._id} 
        showCount={false} 
        link={filteredLink} 
        index={index}
        />
      ))}
    </div>
    
    );
}

export default SearchLinks;
