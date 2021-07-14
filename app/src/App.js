import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v3/top/anime/1/favorite')
    .then((res) => {
      setData(res.data.top)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <p>{console.log(data)}</p>
      {data.map((movie, key) => {
        return <p key = {key}>{movie.title}</p>
      })}
    </div>
  );
}

export default App;
