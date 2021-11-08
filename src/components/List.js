import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteData, fetchUpcomingData, fetchAiringData} from '../store/actions/dataAction';
import {MDBRow, MDBSpinner, MDBTypography } from 'mdb-react-ui-kit';
import Card from './Card'

function List(props) {
    // On mount fetch anime data from these separate links
    useEffect(() => {
        props.fetchFavoriteData();
        props.fetchUpcomingData();
        props.fetchAiringData();
    },[])
    
    // if fetch is loading will render spinner
      if(props.loading) {
        return <>
          <div className='text-center'>
            <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
          </div>
        </>
      }

    return (
        <div>
          {/* Rendering Favorites Data */}
          <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
            Favorites
          </MDBTypography>
          <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
              {props.favoriteData.map((anime, idx) => {
                  return <Card key = {idx} anime = {anime} />
              })}
          </MDBRow>

          {/* Rendering Upcoming Data */}
          <MDBTypography tag='div' className='display-5 pb-3 pt-5 mb-3 border-bottom'>
              Upcoming
          </MDBTypography>
          <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
            {props.upcomingData.map((anime, idx) => {
                return <Card key = {idx} anime = {anime} />
            })}
          </MDBRow>
          
          {/* Rendering Airing Data */}
          <MDBTypography tag='div' className='display-5 pb-3 pt-5 mb-3 border-bottom'>
            Airing Now
          </MDBTypography>
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
      loading: state.dataReducer.loading,
    }
  }

export default connect(mapStateToProps, {fetchUpcomingData, fetchFavoriteData, fetchAiringData})(List);