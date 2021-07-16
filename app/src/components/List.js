import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteData} from '../actions/dataAction';

function List(props) {
    useEffect(() => {
        props.fetchFavoriteData();
      },[])
    
      if(props.loading) {
        return <><h2>loading.....</h2></>
      }
    return (
        <div>
            {props.favoriteData.map((anime) => {
                return <div><h1>{anime.title}</h1></div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      favoriteData: state.dataReducer.favoriteData,
      error: state.dataReducer.error,
      loading: state.dataReducer.loading,
    }
  }

export default connect(mapStateToProps, {fetchFavoriteData})(List);