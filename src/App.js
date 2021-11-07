import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Anime from './components/Anime';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import FriendsPage from './components/FriendsPage';

function App({isLoggedIn}) {

  return (
      <div className="App">
        <NavBar />

        {/* Switches */}
        <Switch>
        <PrivateRoute path = '/dashboard' component={Dashboard} />
        <PrivateRoute exact path = '/list/:id' component={FriendsPage} />
          <Route path = '/anime/:id'>
            <Anime />
          </Route>
          <Route path = '/login'>
            <Login />
          </Route>
          <Route path = '/register'>
            <Register />
          </Route>
          <Route path = '/'>
            <Home />
          </Route>

        </Switch>
      </div>
  );
}

export default App
