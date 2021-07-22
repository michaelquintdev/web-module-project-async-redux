import './App.css';
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
      <div className="App">
        <h1>AniSick</h1>
        <Switch>
          <Route path = '/'>
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
