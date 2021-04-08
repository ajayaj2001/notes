import React from "react";
import axios from 'axios'
import { Link ,withRouter} from "react-router-dom";

function LinkItem({link,index,history,showIndex}) {




function handleDeletelink(id){
  console.log(id);
  axios.delete(`https://ajnotes.herokuapp.com/note/${id}`)
       .then(response=>{
         console.log(response);
         history.push('/');
       })
       .catch(err=>{
         console.log(err);
       })

}


  return (
  <div className="flex items-start mt2">
    <div className="ml1">
      <div>
        {<div  className="black ">{showIndex&& (`${index+1} )`)}  {"   "}Title : {link.title} </div>}{" "}
        <div>Notes : {link.message}</div>
      </div>
      <div className="f6 1h-copy gray">
      {(link.createdAt)}
        { showIndex&&" | "}
        {showIndex&&<Link to={`/link/${link._id}`}>
         Share/Update
        </Link>}
        { showIndex&&" | "}
        {!showIndex&&<Link to={`/update/${link._id}`}>
        {"  "} Update
        </Link>}
        { showIndex&&" | "}
          {showIndex&&<span className="delete-button" onClick={()=>handleDeletelink(link._id)}>
            Delete
          </span>}
          <br/>  <br/>
      </div>
    </div>
  </div>
  );
}

export default withRouter(LinkItem);
