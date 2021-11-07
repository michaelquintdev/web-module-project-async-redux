import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteData, fetchUpcomingData, fetchAiringData} from '../store/actions/dataAction';
import {MDBRow} from 'mdb-react-ui-kit';
import Card from './Card'

function List(props) {
    useEffect(() => {
        props.fetchFavoriteData();
        props.fetchUpcomingData();
        props.fetchAiringData();
    },[])
    
      if(props.loading) {
        return <><h2>loading.....</h2></>
      }
    return (
        <div>
          <h2>Favorites</h2>
          <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
              {props.favoriteData.map((anime, idx) => {
                  return <Card key = {idx} anime = {anime} />
              })}
          </MDBRow>
          <h2>Upcoming</h2>
          <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
            {props.upcomingData.map((anime, idx) => {
                return <Card key = {idx} anime = {anime} />
            })}
          </MDBRow>
          <h2>Airing</h2>
          <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
            {props.airingData.map((anime, idx) => {
                return <Card key = {idx} anime = {anime} />
            })}
          </MDBRow>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      favoriteData: state.dataReducer.favoriteData,
      upcomingData: state.dataReducer.upcomingData,
      airingData: state.dataReducer.airingData,
      error: state.dataReducer.error,
      loading: state.dataReducer.loading,
    }
  }

export default connect(mapStateToProps, {fetchUpcomingData, fetchFavoriteData, fetchAiringData})(List);