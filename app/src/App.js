import './App.css';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions/dataAction';

function App(props) {

  useEffect(() => {
    fetchData();
  },[])

  if(props.loading) {
    return <><h2>loading.....</h2></>
  }

  return (
    <div className="App">
      <h1>AniSick</h1>
      <input />
      <p>loremipsum</p><br></br>
      {/* {data.map((movie, key) => {
        return <p key = {key}>{movie.title}</p>
      })} */}
    </div>
  );
}

  const mapStateToProps = (state) => {
    return {
      data: state.dataReducer.data,
      error: state.dataReducer.error,
      loading: state.dataReducer.loading,
    }
  }

export default connect(mapStateToProps, {fetchData})(App);
