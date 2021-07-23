import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchFavoriteData, fetchUpcomingData, fetchAiringData} from '../actions/dataAction';
import { Link } from 'react-router-dom';

import Favorites from './ListTypes/Favorites';
import Upcoming from './ListTypes/Upcoming';
import Airing from './ListTypes/Airing';

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
            {props.favoriteData.map((anime, idx) => {
                return <Link to = {`/anime/${anime.mal_id}`} key = {idx} >
                          <Favorites key = {idx} anime = {anime} />
                        </Link>
            })}
          <h2>Upcoming</h2>
            {props.upcomingData.map((anime, idx) => {
                return <Link to = {`/${anime.mal_id}`} key = {idx}>
                          <Upcoming key = {idx} anime = {anime} />
                       </Link>
            })}
          <h2>Airing</h2>
            {props.airingData.map((anime, idx) => {
                return <Link to = {`/${anime.mal_id}`} key = {idx}>
                          <Airing key = {idx} anime = {anime} />
                       </Link>
            })}
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