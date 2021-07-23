import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Anime from './components/Anime';


function App() {

  return (
      <div className="App">
        <h1>AniMerch</h1>
        <Switch>
          <Route path = '/anime/:id'>
            <Anime />
          </Route>

          <Route path = '/'>
            <Home />
          </Route>

        </Switch>
      </div>
  );
}

export default App;
