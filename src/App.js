import './App.css';
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Anime from './components/Anime';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
      <div className="App">
        <nav>
          <Link to = '/'>AniMenu</Link>
          <Link to = '/login'>Login</Link>
          <Link to = '/register'>Register</Link>
        </nav>
        <Switch>
        <PrivateRoute path = '/dashboard' component={Profile} />
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

export default App;
