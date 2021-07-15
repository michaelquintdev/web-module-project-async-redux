import './App.css';
import React from 'react'
import Top from './components/Top'
import List from './components/List'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <h1>AniSick</h1>
      <Search />
      <Top />
      <List />
      <Footer />
    </div>
  );
}

export default App;
