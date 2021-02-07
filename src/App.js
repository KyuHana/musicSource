import React, {useState, useMemo} from 'react';
import LandingPage from '../src/Component/View/LandingPage/LandingPage.js';
import Search from '../src/Component/View/Search/Search.js';
import searchResult from '../src/Component/View/SearchResult/SearchResult.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SearchResult from '../src/Component/View/SearchResult/SearchResult.js';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/searchResult' component={SearchResult} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
