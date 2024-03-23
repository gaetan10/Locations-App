import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation.js';
import { UpdatePlaces } from './places/pages/UpdatePlaces.js';

function App() {
  return (
  <Router>
      <MainNavigation></MainNavigation>
      <Switch>
      <main>
        <Route path='/' exact>
          <Users />        
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces/>
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Route path='/places/edit/:placeId' exact>
          <UpdatePlaces />
        </Route>
        <Redirect to='/'/>
      </main>
    </Switch>
  </Router> 
)};

export default App;
