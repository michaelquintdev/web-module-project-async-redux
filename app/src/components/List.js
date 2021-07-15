import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteData} from '../actions/dataAction';

function List(props) {
    useEffect(() => {
        fetchFavoriteData();
      },[])
    
      if(props.loading) {
        return <><h2>loading.....</h2></>
      }
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      favoriteData: state.dataReducer.data,
      error: state.dataReducer.error,
      loading: state.dataReducer.loading,
    }
  }

export default connect(mapStateToProps, {fetchFavoriteData})(List);
