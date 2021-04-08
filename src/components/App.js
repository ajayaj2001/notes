import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import CreateLink from './Link/CreateLink';
import LinkList from './Link/LinkList'
import SearchLinks from './Link/SearchLinks'
import Header from './Header'
import LinkDetail from "./Link/LinkDetail";
import UpdateLink from "./Link/UpdateLink";
function App() {




  return (
   <BrowserRouter>
   <div className="app-container">
<Header/>
   </div>
   <div className="route-container">
   <Switch>
     <Route exact path="/" component={LinkList}/>
    <Route path="/create" component={CreateLink}/>
    <Route path="/search" component={SearchLinks}/>
    <Route path="/link/:linkId" component={LinkDetail}/>
    <Route path="/update/:linkId" component={UpdateLink}/>
   </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
