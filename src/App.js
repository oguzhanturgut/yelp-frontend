import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Search from './Search/Search';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/search' component={Search} />
    </Switch>
  );
}

export default App;
